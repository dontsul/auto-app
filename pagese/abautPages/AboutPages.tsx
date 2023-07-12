'use client';
import React, {useEffect, useState} from "react";

import {ImagesAbout} from "@/components/aboutSection/ImagesAbout";
import {TextBg} from "@/components/textBg/TextBg";
import {TextAbout} from "@/components/aboutSection/TextAbout";
import {Build} from "@/components/aboutSection/Build";
import {TextAboutPages} from "@/pagese/abautPages/textAboutPages/TextAboutPages";
import {WeWelcomeText} from "@/pagese/abautPages/textAboutPages/WeWelcomeText";
import {BottomConect} from "@/pagese/abautPages/buttomConnect/BottomConect";
import FormExample6 from "@/pagese/abautPages/forma/Forma";

export function AboutPages () {
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const triggerPosition = 1000;

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
                            showText ? 'opacity-200 h-auto' : 'opacity-0 h-0'
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
                <div className="z-0 container overflow-hidden">
                    <div className="relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
                            <TextAbout />
                            <FormExample6 />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}