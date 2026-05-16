import type { Route } from "./+types/home";
import { Landing } from "./landing/landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Duck Organization" },
    { property: "og:image", content: "https://duckorg.com/largeDuckBanner.png" },
    { name: "description", content: "The one and only Duck Organization." },
  ];
}

export default function Home() {
  return <Landing />;
}