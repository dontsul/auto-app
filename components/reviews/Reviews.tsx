'use client';
import { ReviewsList } from './reviewsList/ReviewsList';
import {TextBg} from "@/components/textBg/TextBg";
import React, {useEffect, useState} from "react";
import ElevatingText from "@/components/title/ElevatingText";

export const Reviews = () => {
    // const [showText, setShowText] = useState(false);
    //
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollPosition = window.pageYOffset;
    //         const triggerPosition = 2600;
    //         const triggerPositionBottom = 4000;
    //
    //
    //         if (scrollPosition > triggerPosition && scrollPosition < triggerPositionBottom) {
    //             setShowText(true);
    //         } else {
    //             setShowText(false);
    //         }
    //     };
    //
    //     window.addEventListener('scroll', handleScroll);
    //
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
    <section className="container text-center">
        {/*<div className="fixed bottom-0 inset-x-0">*/}
        {/*    <div*/}
        {/*        className={`fixed bottom-0 inset-x-0 transition-opacity transition-height duration-[600ms] ${*/}
        {/*            showText ? 'opacity-200 h-auto' : 'opacity-0 h-0'*/}
        {/*        }`}*/}
        {/*    >*/}
        {/*        <TextBg text={"REVIEWS"} />*/}
        {/*    </div>*/}
        {/*</div>*/}
        <ElevatingText key="brands" mainText={"Our Past  "} subText={"Clients"} />
        <ReviewsList />
    </section>
  );
};
