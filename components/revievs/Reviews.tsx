'use client';
import {TextBg} from "@/components/textBg/TextBg";
import ElevatingText from "@/components/title/ElevatingText";
import React, {useEffect, useState} from "react";

export function Reviews() {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const triggerPosition = 3050;
            const triggerPositionBottom = 5000;

            if (scrollPosition > triggerPosition && scrollPosition < triggerPositionBottom) {
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
        <div className="container relative">
            <div className="m-12 relative">
                <div className="fixed top-0 left-0 right-0">
                    <div
                        className={`fixed top-0 left-0 right-0 transition-opacity duration-500 ${
                            showText ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <TextBg text={"R E V I E W S"} />
                    </div>
                </div>
                <div className="container overflow-hidden">
                    <div className="relative">
                        <div className="p-5 md:col-span-5 items-center justify-center px-10 md:px-10">
                            <h1 className="text-center">
                                <ElevatingText key="brands" mainText={"Our Past   "} subText={"Clients"} />
                            </h1>
                            <p className="m-7 col-span-1 p-5">
                                Please fill out the required information below and we will reach out to help schedule your service. If you have any questions or would like to get started sooner, please call.
                            </p>
                            <p className="m-7 col-span-1 p-5">
                                Please fill out the required information below and we will reach out to help schedule your service. If you have any questions or would like to get started sooner, please call.
                            </p>
                            <p className="m-7 col-span-1 p-5">
                                Please fill out the required information below and we will reach out to help schedule your service. If you have any questions or would like to get started sooner, please call.
                            </p>
                            <p className="m-7 col-span-1 p-5">
                                Please fill out the required information below and we will reach out to help schedule your service. If you have any questions or would like to get started sooner, please call.
                            </p>
                            <p className="m-7 col-span-1 p-5">
                                Please fill out the required information below and we will reach out to help schedule your service. If you have any questions or would like to get started sooner, please call.
                            </p>
                            <p className="m-7 col-span-1 p-5">
                                Please fill out the required information below and we will reach out to help schedule your service. If you have any questions or would like to get started sooner, please call.
                            </p>
                            <p className="m-7 col-span-1 p-5">
                                Please fill out the required information below and we will reach out to help schedule your service. If you have any questions or would like to get started sooner, please call.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}