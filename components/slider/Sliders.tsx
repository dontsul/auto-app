'use client'
import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import BackgroundImage from "@/components/slider/BackgroundImage";
import SlideInfo from "@/components/slider/SlideInfo";
import Slides from "@/components/slider/Slides";
import Controls from "@/components/slider/Controls";



const inter = Righteous({
    subsets: ["latin"],
    weight: ["400"],
});
export type Data = {
    img: string;
    title: string;
    description: string;
    location: string;
};

export type CurrentSlideData = {
    data: Data;
    index: number;
};

export default function Home() {
    const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
    const [transitionData, setTransitionData] = React.useState<Data>(
        sliderData[0]
    );
    const [currentSlideData, setCurrentSlideData] =
        React.useState<CurrentSlideData>({
            data: initData,
            index: 0,
        });

    return (
        <div
            className={`relative min-h-screen select-none overflow-hidden text-white `}>
            <AnimatePresence>
                <BackgroundImage
                    transitionData={transitionData}
                    currentSlideData={currentSlideData}
                />
                <div className="  absolute z-10  h-full w-full">
                    <div className=" flex h-full w-full grid-cols-4 flex-col md:grid">
                        <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
                            <SlideInfo
                                transitionData={transitionData}
                                currentSlideData={currentSlideData}
                            />
                        </div>
                        <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
                            <Slides data={data} />
                            <Controls
                                currentSlideData={currentSlideData}
                                data={data}
                                transitionData={transitionData}
                                initData={initData}
                                handleData={setData}
                                handleTransitionData={setTransitionData}
                                handleCurrentSlideData={setCurrentSlideData}
                                sliderData={sliderData}
                            />

                        </div>
                    </div>
                </div>

            </AnimatePresence>
        </div>

    );
}

const sliderData = [
    {
        img: "/1.png",
        location: "Elevate Your Style",
        description:
            "ere at Elevated Motoring we specialize in providing high-quality services to enhance the appearance and performance of your vehicle. We have the expertise and experience to take your vehicle to the next level.",
        title: "SAINT ANTÖNEN",
    },
    {
        img: "/2.png",
        location: "TEST",
        description:
            "TEST",
        title: "TEST",
    },
    {
        img: "/3.png",
        location: "TEST2",
        description:
            "TEST2",
        title: "TEST2",
    },
    {
        img: "/4.png",
        location: "TEST3",
        description:
            "TEST3",
        title: "TEST3",
    },
];

const initData = sliderData[0];
