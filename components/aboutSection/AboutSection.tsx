import React from "react";
import {AboutBg} from "@/components/aboutSection/AboutBg";
import {Build} from "@/components/aboutSection/Build";
import {ImagesAbout} from "@/components/aboutSection/ImagesAbout";
import {TextAbout} from "@/components/aboutSection/TextAbout";

export function AboutSection (){

    return(
        <div className="z-0">
            <AboutBg />
            <div className="relative">
                <div className="  grid grid-cols-10 md:col-span-3 gap-3 relative">
                    <TextAbout />
                    <ImagesAbout />
                </div>
                <Build />
            </div>

        </div>
    );
}