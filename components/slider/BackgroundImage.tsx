import React from "react";
import { motion } from "framer-motion";
import { CurrentSlideData, Data } from "@/components/slider/Sliders";
import Image from "next/image";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function BackgroundImage({ transitionData, currentSlideData }: Props) {
  return (
    <>
      {transitionData && (
        <motion.div
          key={transitionData.img}
          layoutId={transitionData.img}
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          className=" absolute left-0 top-0 h-full w-full object-cover brightness-50"
        >
          <Image
            src={transitionData.img}
            alt="Transition Image"
            width={1400}
            height={1000}
          />
        </motion.div>
      )}
      <Image
        alt="Current Image"
        key={currentSlideData.data.img + "transition"}
        src={currentSlideData.data.img}
        className=" absolute left-0 top-0 h-full w-full object-cover brightness-50"
        width={1400}
        height={1000}
      />
    </>
  );
}

export default BackgroundImage;
