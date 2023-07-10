'use client';
import React, {useEffect, useState} from "react";
import {TextBg} from "@/components/textBg/TextBg";
import {Build} from "@/components/aboutSection/Build";
import {ImagesAbout} from "@/components/aboutSection/ImagesAbout";
import {TextAbout} from "@/components/aboutSection/TextAbout";

export function AboutSection (){
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const triggerPosition = 1000; // Змініть це значення на відповідний числовий відрізок

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
        return (
            <div className="relative">
                <div className="fixed bottom-0 inset-x-0">
                    {showText && <TextBg text={"A B O U T"} />}
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