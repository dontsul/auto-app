'use client'
import { AnimatePresence } from "framer-motion";
import React from "react";
import BackgroundImage from "@/components/slider/BackgroundImage";
import SlideInfo from "@/components/slider/SlideInfo";
import Slides from "@/components/slider/Slides";
import Controls from "@/components/slider/Controls";


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

export default function CommercialSlider() {
    const [data, setData] = React.useState<Data[]>(CommercialSliderData.slice(1));
    const [transitionData, setTransitionData] = React.useState<Data>(
        CommercialSliderData[0]
    );
    const [currentSlideData, setCurrentSlideData] =
        React.useState<CurrentSlideData>({
            data: initData,
            index: 0,
        });

    return (
        <div
            className={`relative min-h-screen select-none overflow-hidden text-white`}
        >
            <AnimatePresence mode="wait">
                <BackgroundImage
                    key="background-image"
                    transitionData={transitionData}
                    currentSlideData={currentSlideData}
                />
                <div className="  absolute z-20  h-full w-full">
                    <div className=" flex h-full w-full grid-cols-4 flex-col md:grid">
                        <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
                            <SlideInfo
                                key="slide-info"
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
                                sliderData={CommercialSliderData}
                            />
                        </div>
                    </div>
                </div>
            </AnimatePresence>
        </div>
    );
}

const CommercialSliderData = [
    {
        img: "/Slider1.png",
        location: "TEST4",
        description:
            "TEST4",
        title: "TEST4",
    },
    {
        img: "/Slider2.png",
        location: "TEST4",
        description:
            "TEST4",
        title: "TEST4",
    },
    {
        img: "/Slider3.png",
        location: "TEST4",
        description:
            "TEST4",
        title: "TEST4",
    },

];

const initData = CommercialSliderData[0];