// A template (unlike a layout) remounts on every navigation, so the fade/rise plays on each route change.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page">{children}</div>;
}
