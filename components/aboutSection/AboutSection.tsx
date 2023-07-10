import React from "react";
import {AboutBg} from "@/components/aboutSection/AboutBg";
import {Build} from "@/components/aboutSection/Build";
import {ImagesAbout} from "@/components/aboutSection/ImagesAbout";
import {TextAbout} from "@/components/aboutSection/TextAbout";

export function AboutSection (){

    return(
        <div className="z-0 container ">
            <AboutBg />
            <div className="relative">
                <div className=" grid grid-cols-1 lg:grid-cols-2  gap-6 relative">
                    <TextAbout />
                    <ImagesAbout />
                </div>
                <Build />
            </div>

        </div>
    );
}