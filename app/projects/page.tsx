import { PageHead } from "@/components/page-head";
import { ProjectsView } from "@/components/projects-view";
import { projects } from "@/content/projects";
import { getLifetimeContributions } from "@/lib/github";
import { sectionMetadata } from "@/lib/metadata";
import { getSection } from "@/lib/sections";

export const metadata = sectionMetadata("projects");
export const revalidate = 86400;

export default async function ProjectsPage() {
  const contributions = await getLifetimeContributions();
  return (
    <section>
      <PageHead section={getSection("projects")} />
      <ProjectsView projects={projects} contributions={contributions} />
    </section>
  );
}
