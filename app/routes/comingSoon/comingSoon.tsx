import './comingSoon.css'
import logo from './logoBanner.svg'
import { Nav } from "~/components/nav/nav";

export default function ComingSoon() {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden bg-neutral-100">
      <header className="relative z-10 flex justify-center pt-6">
        <Nav />
      </header>
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
        <img src={logo} alt="Logo" />
        <h1 className="text-md text-center text-neutral-500">Coming Soon</h1>
      </div>
    </div>
  );
}