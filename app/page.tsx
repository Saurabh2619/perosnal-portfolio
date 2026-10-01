import HeroSection from "@/components/hero/HeroSection";
import { WorkSection } from "@/components/work/WorkSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { StackSection } from "@/components/stack/StackSection";
import { PrinciplesSection } from "@/components/principles/PrinciplesSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <WorkSection />
      <ExperienceSection />
      <StackSection />
      <PrinciplesSection />
      <ContactSection />
    </main>
  );
}
