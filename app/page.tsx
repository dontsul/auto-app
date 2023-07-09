import Sliders from "@/components/slider/Sliders";
import React from "react";
import {AboutSection} from "@/components/aboutSection/AboutSection";
import {Brands} from "@/components/brands/Brands";

export default function Home() {
  return <main>
    <Sliders />
    <AboutSection />
    <Brands />
    </main>;
}
