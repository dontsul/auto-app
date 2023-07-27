"use client";
import React, { useState } from "react";
import { Title } from "@/components/title/Title";
import imagesTest from "@/public/CARBON-Car.webp";
import imagesTest2 from "@/public/Ceramic-Windshield.webp";
import imagesTest3 from "@/public/CERAMIC-Plus-Car.webp";
import { CustomForm } from "@/components/customForm/CustomForm";
import Image from "next/image";

import { motion } from "framer-motion";
import { Reviews } from "@/components/reviews/Reviews";
import { ListTintPages } from "@/components/ourServices/windowTintPages/ListTintPages";
import { WindowTintItem } from "@/components/ourServices/windowTintPages/WindowTintItem";
import { WindowTintCar } from "@/components/ourServices/windowTintPages/WindowTintCar";
export const text1 = [
  "UV Protection",
  "Improved Privacy",
  "Reduced Glare",
  "Added Style",
];
export const text2 = [
  "70% Heat Rejection",
  "UV Protection",
  "Improved Privacy",
  "Reduced Glare",
  " Improved Comfort",
  "Added Style",
];
export const text3 = [
  "96% Heat Rejection",
  "UV Protection",
  "Improved Privacy",
  "Reduced Glare",
  "Non-Metallized",
  "Nano-Ceramic",
  "Added Style",
];

export function WindowTintPages() {
  const [currentText, setCurrentText] = useState("PRIME CS");
  const [currentImage, setCurrentImage] = useState("path-to-prime-cs-image");

  const handleButtonClick = (text: string, image: string) => {
    setCurrentText(text);
    setCurrentImage(image);
  };
  const imageAbout = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="">
      <Title tag="h2" cn="mt-24 sm:mt-[6px] md:mt-[20px] lg:mt-[28px] mb-14">
        Window <span className="text-yellow-500">Tinting</span>
      </Title>
      <div>
        <WindowTintItem />
      </div>

      <div className="pb-20">
        <Title tag="h4" cn="mb-10">
          Contact us
        </Title>
        <CustomForm />
        <Reviews />
      </div>
    </div>
  );
}
