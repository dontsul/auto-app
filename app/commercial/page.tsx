import {AboutSection} from "@/components/aboutSection/AboutSection";
import {Contact} from "@/components/contact/Contact";
import React from "react";
import CommercialSlider from "@/components/commercialPages/CommercialSlider";
import {PartnersSlider} from "@/components/partnersSlider/PartnersSlider";

export default function Financing() {
  return (
      <div>
          <CommercialSlider />
          <AboutSection />
          <PartnersSlider />
          <Contact />
      </div>
  );
}
