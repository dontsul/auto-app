import React from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import { IoMdBookmark } from "react-icons/io";
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
        {/*<button*/}
        {/*  className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-yellow-500 text-xs  transition*/}
        {/*    duration-300 ease-in-out hover:opacity-80 "*/}
        {/*>*/}
        {/*  <IoMdBookmark className=" text-xl" />*/}
        {/*</button>*/}
          <button
              className="font-bold w-fit rounded-none border-[1px] border-[#ffffff8f] px-6 py-3 text-sm  transition duration-300 ease-in-out bg-black text-white border-black hover:bg-white hover:text-black"
          >
          View More
        </button>
      </motion.div>
    </>
  );
}

export default SlideInfo;
