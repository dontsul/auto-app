"use client";
import React, { useEffect, useState } from "react";

import { WeWelcomeText } from "@/components/aboutPages/textAboutPages/WeWelcomeText";
import { BottomConect } from "@/components/aboutPages/buttomConnect/BottomConect";
import { TextAboutPages } from "@/components/aboutPages/textAboutPages/TextAboutPages";
import { TextAboutLeft } from "@/components/aboutPages/textAboutPages/TextAboutLeft";
import Image from "next/image";
import images from "@/public/2.png";

export function AboutPages() {
  return (
    <div className="relative container p-7">
      <div className="relative container py-16">
        <div className="z-0 container overflow-hidden">
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
              <TextAboutPages />
              <div className=" container brightness-75 order-1 lg:order-2  justify-center relative">
                <Image
                  className="rounded-2xl lg:rounded-2xl  brightness-75"
                  width={500}
                  height={500}
                  src={images}
                  alt="bg"
                />
              </div>
            </div>
            <div className="py-20 grid grid-cols-1 lg:grid-cols-2  ">
              <div className=" container brightness-75 order-1 lg:order-2  justify-center ">
                <Image
                  className="rounded-2xl lg:rounded-2xl  brightness-75"
                  width={500}
                  height={500}
                  src={images}
                  alt="bg"
                />
              </div>
              <TextAboutLeft />
            </div>
          </div>
        </div>

        <div className="z-20 container overflow-hidden">
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
              <WeWelcomeText />
            </div>
          </div>
        </div>
      </div>
      <BottomConect />
    </div>
  );
}
