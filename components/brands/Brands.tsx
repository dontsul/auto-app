'use client';
import React from "react";
import ElevatingText from "@/components/title/ElevatingText";

import {SliderComponentMain} from "@/components/sliderComponent/SliderComponentMain";

export function Brands () {


    return (
        <div className="relative">
            <div className="z-0 container justify-center overflow-hidden">
                <div className="relative">
                    <div className=" text-center gap-6 relative">
                        <ElevatingText mainText={"Check Out Our Avalable "} subText={"Brands"} />
                    </div>
                    <div className="z-20 p-4 flex md:col-span-5 items-center justify-center px-4 md:px-10">
                        <button className="z-20 w-96 font-bold justify-center py-3 text-sm border bg-black text-white border-black hover:bg-white hover:text-black">                            SELECT YOUR VEHICLE
                        </button>
                    </div>
                    <div className="z-20 p-4 flex md:col-span-5 items-center justify-center px-4 md:px-10">
                        <SliderComponentMain />
                    </div>
                </div>
            </div>
        </div>

    );
}