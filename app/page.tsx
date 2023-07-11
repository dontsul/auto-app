import Sliders from "@/components/slider/Sliders";
import React from "react";
import {AboutSection} from "@/components/aboutSection/AboutSection";
import {Brands} from "@/components/brands/Brands";
import {Contacts} from "@/components/contacts/Contacts";

export default function Home() {
  return <main>
    <Sliders />
    <AboutSection />
    <Brands />
    <Contacts />
    </main>;
}
