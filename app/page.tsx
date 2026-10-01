import HeroSection from "@/components/hero/HeroSection";
import { WorkSection } from "@/components/work/WorkSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <WorkSection />
    </main>
  );
}
