import type { Metadata } from "next";
import { HomepageHero } from "@/components/sections/HomepageHero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ProcessPrinciples } from "@/components/sections/ProcessPrinciples";
import { StudioIntro } from "@/components/sections/StudioIntro";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Streamline Studios — Product Innovation Studio",
  description:
    "Streamline Studios designs physical products from concept to production — combining industrial design, engineering, electronics and manufacturing.",
};

export default function HomePage() {
  return (
    <>
      <HomepageHero />
      <SelectedWork />
      <ProcessPrinciples />
      <StudioIntro />
      <ContactCTA />
    </>
  );
}
