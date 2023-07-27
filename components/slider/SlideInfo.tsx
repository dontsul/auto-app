import React from "react";
import {motion} from "framer-motion";
import OtherInfo from "./OtherInfo";
import {IoMdBookmark} from "react-icons/io";
import {CurrentSlideData, Data} from "@/components/slider/Sliders";

type Props = {
    transitionData: Data;
    currentSlideData: CurrentSlideData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
    return (
        <>
            <motion.span layout className=" mb-2 h-1 w-5 rounded-full bg-white" />
            <OtherInfo
                data={transitionData ? transitionData : currentSlideData.data}
            />
            <motion.div layout className=" mt-5 flex items-center gap-3">
                <button
                    className="ifont-bold w-fit rounded-none border-[1px] border-[#ffffff8f] px-6 py-3 text-sm  transition duration-300 ease-in-out bg-white text-black border-black hover:bg-black hover:text-white"
                >
                    <IoMdBookmark className=" text-xl" />
                </button>
                <button
                    className=" w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 text-[10px] font-thin transition duration-300
            ease-in-out hover:bg-white hover:text-black "
                >
                    DISCOVER LOCATION
                </button>
            </motion.div>
        </>
    );
}

export default SlideInfo;
