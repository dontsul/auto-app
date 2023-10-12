import React, { forwardRef } from "react";
import { motion, MotionProps } from "framer-motion";
import { CurrentSlideData, DataSlider } from "@/data/dataSliderHome/DataTepe";

type Props = {
    transitionData: DataSlider;
    currentSlideData: CurrentSlideData;
};

const BackgroundImage: React.ForwardRefRenderFunction<HTMLImageElement, Props> = (
    { transitionData, currentSlideData },
    ref
) => {
    return (
        <>
            {transitionData && (
                <motion.img
                    key={transitionData.img}
                    layoutId={transitionData.img}
                    alt="Transition Image"
                    transition={{
                        opacity: { ease: "linear" },
                        layout: { duration: 0.6 },
                    }}
                    className="absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
                    src={transitionData.img}
                    ref={ref as React.RefObject<HTMLImageElement>}
                />
            )}
            <motion.img
                alt="Current Image"
                key={currentSlideData.data.img + "transition"}
                src={currentSlideData.data.img}
                className="absolute left-0 top-0 h-full w-full object-cover brightness-50"
                ref={ref as React.RefObject<HTMLImageElement>}
            />
        </>
    );
};

BackgroundImage.displayName = "BackgroundImage";

export default React.forwardRef(BackgroundImage);
