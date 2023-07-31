import React from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import { IoMdBookmark } from "react-icons/io";
import { CurrentSlideData, Data } from "@/components/slider/Sliders";
import { Link as LinkScroll } from "react-scroll";

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
          className=" w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 text-[10px] font-thin transition duration-300
            ease-in-out hover:bg-white hover:text-black "
        >
          learn more
        </button>
        <LinkScroll
          activeClass="active"
          to="form"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button
            className=" w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 text-[10px] font-thin transition duration-300
            ease-in-out hover:bg-white hover:text-black "
          >
            Contact us
          </button>
        </LinkScroll>
      </motion.div>
    </>
  );
}

export default SlideInfo;
