'use client';
import React, {useEffect, useState} from "react";

import {ImagesAbout} from "@/components/aboutSection/ImagesAbout";
import {TextBg} from "@/components/textBg/TextBg";
import {WeWelcomeText} from "@/components/aboutPages/textAboutPages/WeWelcomeText";
import FormExample6 from "@/components/aboutPages/forma/Forma";
import {BottomConect} from "@/components/aboutPages/buttomConnect/BottomConect";
import {TextAboutPages} from "@/components/aboutPages/textAboutPages/TextAboutPages";
import ElevatingText from "@/components/title/ElevatingText";
import {AboutSection} from "@/components/aboutSection/AboutSection";
export function AboutPages () {
    return(
        <div className="relative container p-7">
            <div className="relative container py-16">
                <div className="z-0 container overflow-hidden">
                    <div className="relative">
                            <ElevatingText mainText={"Elevating Vehicles For  "} subText={"Max Performance"} />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
                            <TextAboutPages />
                            <ImagesAbout />
                        </div>


                    </div>
                </div>

                <div className="z-20 container overflow-hidden">
                    <div className="relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
                            <WeWelcomeText />
                            <FormExample6 />
                        </div>
                    </div>
                </div>
            </div>
            <BottomConect />

        </div>
    );
}