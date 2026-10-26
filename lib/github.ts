import { githubLogin } from "@/content/links";
import { lastKnownContributions } from "@/content/projects";

const ENDPOINT = "https://api.github.com/graphql";
const REVALIDATE = 86400;

async function gql<T>(token: string, query: string): Promise<T> {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    next: { revalidate: REVALIDATE },
  });
  if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
  const json = (await res.json()) as { data?: T; errors?: unknown };
  if (!json.data || json.errors) throw new Error("GitHub GraphQL returned errors");
  return json.data;
}

/**
 * Lifetime contributions: the account creation year up to now, summed one calendar year at a time
 * (GitHub limits each contributionsCollection window to one year).
 * Never throws; falls back to the last known number from /content.
 */
export async function getLifetimeContributions(): Promise<number> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return lastKnownContributions;

  try {
    const created = await gql<{ user: { createdAt: string } }>(
      token,
      `query { user(login: "${githubLogin}") { createdAt } }`,
    );
    const firstYear = new Date(created.user.createdAt).getUTCFullYear();
    const thisYear = new Date().getUTCFullYear();

    const years: number[] = [];
    for (let y = firstYear; y <= thisYear; y++) years.push(y);

    const fields = years
      .map(
        (y) =>
          `y${y}: contributionsCollection(from: "${y}-01-01T00:00:00Z", to: "${y}-12-31T23:59:59Z") { contributionCalendar { totalContributions } }`,
      )
      .join("\n");

    const data = await gql<{
      user: Record<string, { contributionCalendar: { totalContributions: number } }>;
    }>(token, `query { user(login: "${githubLogin}") { ${fields} } }`);

    const total = years.reduce((sum, y) => sum + (data.user[`y${y}`]?.contributionCalendar.totalContributions ?? 0), 0);
    return total > 0 ? total : lastKnownContributions;
  } catch {
    return lastKnownContributions;
  }
}
