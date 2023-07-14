'use client';
import React, {useEffect, useState} from "react";

import {ImagesAbout} from "@/components/aboutSection/ImagesAbout";
import {TextBg} from "@/components/textBg/TextBg";
import {WeWelcomeText} from "@/components/aboutPages/textAboutPages/WeWelcomeText";
import FormExample6 from "@/components/aboutPages/forma/Forma";
import {BottomConect} from "@/components/aboutPages/buttomConnect/BottomConect";
import {TextAboutPages} from "@/components/aboutPages/textAboutPages/TextAboutPages";
export function AboutPages () {
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const triggerPosition = 500;

            if (scrollPosition > triggerPosition) {
                setShowText(false);
            } else {
                setShowText(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
        <div className="relative container p-7">
            <div className="relative container py-16">
                <div className="fixed bottom-0 inset-x-0">
                    <div
                        className={`fixed bottom-0 inset-x-0 transition-opacity transition-height duration-[600ms] ${
                            showText ? 'opacity-50 h-auto' : 'opacity-0 h-0'
                        }`}
                    >
                        <TextBg text={"A B O U T"} />
                    </div>
                </div>
                <div className="z-0 container overflow-hidden">
                    <div className="relative">
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