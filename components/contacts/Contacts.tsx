'use client';
import {TextBg} from "@/components/textBg/TextBg";
import ElevatingText from "@/components/title/ElevatingText";
import React, {useEffect, useState} from "react";

export function Contacts (){

    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const triggerPosition = 1800;

            if (scrollPosition > triggerPosition) {
                setShowText(true);
            } else {
                setShowText(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div>
            <div className="m-12 relative">
                <div className="fixed bottom-0 inset-x-0">
                    <div
                        className={`fixed bottom-0 inset-x-0 transition-opacity transition-height duration-[600ms] ${
                            showText ? 'opacity-200 h-auto' : 'opacity-0 h-0'
                        }`}
                    >
                        <TextBg text={"C O N T A C T"} />
                    </div>
                </div>
                <div className=" container overflow-hidden">
                    <div className="relative">
                        <div className="p-5    md:col-span-5 items-center justify-center px-10 md:px-10">
                            <h1 className="text-center">
                                <ElevatingText
                                    key="brands"
                                    mainText={"Start Your Service  "}
                                    subText={"Today"} />
                            </h1>
                            <p className="m-5 col-span-1 p-5" >
                                Please fill out the required information below and we will reach out to help schedule your service. If you have any questions or would like to get started sooner, please call.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}