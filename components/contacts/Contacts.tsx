'use client';
import {TextBg} from "@/components/textBg/TextBg";
import ElevatingText from "@/components/title/ElevatingText";
import React, {useEffect, useState} from "react";
import {BottomConect} from "@/components/aboutPages/buttomConnect/BottomConect";


export function Contacts (){
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const triggerPosition = 1800;
            const triggerPositionBottom = 2500;


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

    return (
        <div className="relative container py-16">
            <div className="fixed bottom-0 inset-x-0">
                <div
                    className={`fixed bottom-0 inset-x-0 transition-opacity transition-height duration-[600ms] ${
                        showText ? 'opacity-200 h-auto' : 'opacity-0 h-0'
                    }`}
                >
                    <TextBg text={"CONTACT"} />
                </div>
            </div>
            <div className="z-0 container  text-center">
                <div className="relative ">
                    <div className="  relative">
                        <div className=" z-10 p-5 flex order-1   items-center justify-center px-10 md:px-10  transition-transform duration-300">
                            <div className=" relative z-20">
                                <ElevatingText mainText={"Start Your Service Today  "} subText={"Today"} />
                                <p className="leading-9 py-7 text-[16px] text-center mb-2  rounded-full " style={{color: '#616161',display: 'inline-block', width: '100%', textAlign: 'center' }}>
                                    Please fill out the required information below and we will reach out to help schedule your service. If you have any questions or would like to get started sooner, please call.
                                </p>

                                <BottomConect />


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
