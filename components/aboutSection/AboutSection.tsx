'use client';
import React, {useEffect, useState} from "react";
import {TextBg} from "@/components/textBg/TextBg";
import {Build} from "@/components/aboutSection/Build";
import {ImagesAbout} from "@/components/aboutSection/ImagesAbout";
import {TextAbout} from "@/components/aboutSection/TextAbout";
import ElevatingText from "@/components/title/ElevatingText";

export function AboutSection (){
        return (
            <div className="relative container py-16">

                <div className="z-0 container overflow-hidden">
                    <div className="relative">
                        <ElevatingText mainText={"Elevating Vehicles For  "} subText={"Max Performance"} />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
                            <TextAbout />
                            <ImagesAbout />
                        </div>
                        <Build />
                    </div>
                </div>
            </div>
        );
    }