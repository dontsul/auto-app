import {AboutSection} from "@/components/aboutSection/AboutSection";
import {Contact} from "@/components/contact/Contact";
import {Reviews} from "@/components/reviews/Reviews";
import React from "react";
import CommercialSlider from "@/components/commercialPages/CommercialSlider";
import RelatedProjects from "@/components/mainPortfolioFix/projects/RelatedProjects";
import ProjectsGrid from "@/components/mainPortfolioFix/projects/ProjectsGrid";

export default function Financing() {
  return (
      <div>
          <CommercialSlider />
          <AboutSection />

          <Contact />
          <Reviews />
      </div>
  );
}
