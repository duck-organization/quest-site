import type { Route } from "./+types/home";
import { ComingSoon } from "./landing/comingSoon";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Quest" },
    { name: "description", content: "The official site for Quest Foundation." },
  ];
}

export default function Home() {
  return <ComingSoon />;
}
