import Sliders from "@/components/slider/Sliders";
import React from "react";
import { AboutSection } from "@/components/aboutSection/AboutSection";
import { Contact } from "@/components/contact/Contact";
import { Reviews } from "@/components/reviews/Reviews";
import MyChat from "@/components/chatGpt/MyChat";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Sliders />
      <AboutSection />
      <Contact />
      <Reviews />
    </div>
  );
}
