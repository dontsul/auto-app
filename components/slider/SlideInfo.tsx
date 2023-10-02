import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import OtherInfo from "./OtherInfo";
import { CurrentSlideData, DataSlider } from "@/data/dataSliderHome/DataTepe";

type Props = {
    transitionData: DataSlider;
    currentSlideData: CurrentSlideData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
    return (
        <>
            <motion.span layout className="mb-2 h-1 w-5 rounded-full bg-white" />
            <OtherInfo
                data={transitionData ? transitionData : currentSlideData.data}
            />
            <motion.div layout className="mt-5 flex items-center gap-3">
                <Link href={transitionData.link} passHref>
                    <button
                        className="w-full md:w-auto rounded-full border-[1px] border-[#ffffff8f] px-8 py-4 text-[14px] font-thin transition duration-300 ease-in-out hover:bg-white hover:text-black"
                    >
                        {transitionData.title}
                    </button>
                </Link>
                <button
                    className="w-full md:w-auto rounded-full border-[1px] border-[#ffffff8f] px-8 py-4 text-[14px] font-thin transition duration-300 ease-in-out hover:bg-white hover:text-black"
                    onClick={() =>
                        document
                            .getElementById("form") // Replace with the ID of your form section
                            ?.scrollIntoView({ behavior: "smooth" })
                    }
                >
                    Contact us
                </button>
            </motion.div>
        </>
    );
}

export default SlideInfo;
