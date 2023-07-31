import Sliders from "@/components/slider/Sliders";
import {AboutSection} from "@/components/aboutSection/AboutSection";
import {Contact} from "@/components/contact/Contact";
import {Reviews} from "@/components/reviews/Reviews";
import React from "react";
import CommercialSlider from "@/components/commercialPages/CommercialSlider";

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
