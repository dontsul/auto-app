import React from "react";
import {TextBg} from "@/components/textBg/TextBg";
import {Build} from "@/components/aboutSection/Build";
import {ImagesAbout} from "@/components/aboutSection/ImagesAbout";
import {TextAbout} from "@/components/aboutSection/TextAbout";

export function AboutSection (){

    return(
        <div className="relative">
            <div className="fixed bottom-0 inset-x-0">
                <TextBg text="A B O U T" />
            </div>
            <div className="z-0 container overflow-hidden">
                <div className="relative">
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