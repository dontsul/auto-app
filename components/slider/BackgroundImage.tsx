import React from "react";
import {motion} from "framer-motion";
import {CurrentSlideData, Data} from "@/components/slider/Sliders";
type Props = {
    transitionData: Data;
    currentSlideData: CurrentSlideData;
};

function BackgroundImage({ transitionData, currentSlideData }: Props) {
    const imageToShow = transitionData ? transitionData.img : currentSlideData.data.img;

    return (
        <motion.img
            key={imageToShow}
            layoutId={imageToShow}
            alt="Image"
            transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.6 },
            }}
            className="absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
            src={imageToShow}
        />
    );
}

export default BackgroundImage;
