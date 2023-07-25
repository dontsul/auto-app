"use client";
import React, { useEffect, useState } from "react";

import { WeWelcomeText } from "@/components/aboutPages/textAboutPages/WeWelcomeText";
import { BottomConect } from "@/components/aboutPages/buttomConnect/BottomConect";
import { TextAboutPages } from "@/components/aboutPages/textAboutPages/TextAboutPages";
import { TextAboutLeft } from "@/components/aboutPages/textAboutPages/TextAboutLeft";
import Image from "next/image";
import images from "@/public/2.png";
import {CustomForm} from "@/components/customForm/CustomForm";
import {Title} from "@/components/title/Title";
import {ImageAboutSection} from "@/components/aboutSection/ImageAbotSection";

export function AboutPages() {
  return (
    <div className=" container p-7">
      <div className="">
        <div className="">
          {/*<div className="relative">*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
              <TextAboutPages />
              <div className="  brightness-75 order-1 lg:order-2  justify-center relative">
                <ImageAboutSection />

              </div>
            </div>
          <TextAboutLeft />
            <div className="py-20 grid grid-cols-1 lg:grid-cols-2  ">



            </div>
          </div>
        <Title tag="h2" cn="mt-24 sm:mt-[6px] md:mt-[20px] lg:mt-[20px] mb-14">
          Contact  <span className="text-yellow-500">Us</span>
        </Title>
        </div>
        <div className=" overflow-hidden">
          <div className="relative">
              <WeWelcomeText />

          </div>
        </div>

        <CustomForm />



      <BottomConect />

    </div>
  );
}
