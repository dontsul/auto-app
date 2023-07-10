'use client';
import React, {useEffect, useState} from "react";
import {TextBg} from "@/components/textBg/TextBg";
import ElevatingText from "@/components/title/ElevatingText";

export function Brands () {
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

    return (
        <div className="relative">
            <div className="fixed bottom-0 inset-x-0">
                <div
                    className={`fixed bottom-0 inset-x-0 transition-opacity transition-height duration-[600ms] ${
                        showText ? 'opacity-200 h-auto' : 'opacity-0 h-0'
                    }`}
                >
                    <TextBg text={"C O N T A C T"} />
                </div>
            </div>
            <div className="z-0 container overflow-hidden">
                <div className="relative">
                    <div className="p-10 col-span-12 flex md:col-span-5 items-center justify-center px-10 md:px-10">
                        <h3 className="text-center">
                            <ElevatingText mainText={"Elevating Vehicles For  "} subText={"Max Performance"} />
                        </h3>
                    </div>
                    <div className="p-4 flex md:col-span-5 items-center justify-center px-4 md:px-10">
                        <button className="w-96 font-bold justify-center py-3 text-sm border bg-black text-white border-black hover:bg-white hover:text-black">
                            SELECT YOUR VEHICLE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    // <div className="relative ">
    //     {showText && <TextBg text={"TEst"} />}
    //
    //         <div className="z-10">
    //             <div className="p-10 col-span-12 flex md:col-span-5 items-center justify-center px-10 md:px-10">
    //                 <h3 className="text-center">
    //                     <span className="text-1xl font-semibold md:my-6 md:text-4xl md:leading-[50px]" style={{ color: 'black' }}>
    //                         Elevating Vehicles For
    //                     </span>
    //                     <span className="text-1xl font-semibold md:my-3 md:text-4xl md:leading-[50px]" style={{ color: '#ac9b79' }}>
    //                         Max Performance
    //                     </span>
    //                 </h3>
    //             </div>
    //             <div className="p-4 col-span-12 flex md:col-span-5 items-center justify-center px-4 md:px-10">
    //                 <button className="w-96 font-bold justify-center py-3 text-sm border bg-black text-white border-black hover:bg-white hover:text-black">
    //                     SELECT YOUR VEHICLE
    //                 </button>
    //             </div>
    //             <div className="p-4 col-span-12 flex md:col-span-5 items-center justify-center px-4 md:px-10">
    //                 <button className="w-96 font-bold justify-center py-3 text-sm border bg-black text-white border-black hover:bg-white hover:text-black">
    //                     SELECT YOUR VEHICLE
    //                 </button>
    //             </div>
    //             <div className="p-4 col-span-12 flex md:col-span-5 items-center justify-center px-4 md:px-10">
    //                 <button className="w-96 font-bold justify-center py-3 text-sm border bg-black text-white border-black hover:bg-white hover:text-black">
    //                     SELECT YOUR VEHICLE
    //                 </button>
    //             </div>
    //
    //         </div>
    //
    //
    //     </div>

    );
}