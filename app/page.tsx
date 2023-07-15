import Sliders from "@/components/slider/Sliders";
import React from "react";
import {AboutSection} from "@/components/aboutSection/AboutSection";
import {Brands} from "@/components/brands/Brands";
import {Contacts} from "@/components/contacts/Contacts";
import {Reviews} from "@/components/reviews/Reviews";

export default function Home() {
  return (
    <div>
      <Sliders />
      <AboutSection />
      <Reviews />
    </div>
  )

}
