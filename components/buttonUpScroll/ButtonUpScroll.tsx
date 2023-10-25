"use client";

import ScrollToTop from "react-scroll-to-top";
import {BsFillArrowUpSquareFill} from "react-icons/bs";

export const ButtonUpScroll = () => {
  const customStyle = {
    backgroundColor: "blue",
    color: "white",
    borderRadius: "50%",
    padding: "10px",
  };

  return (
    <div className="fixed right-4 bottom-4">
      <ScrollToTop smooth className="flex items-center justify-center p-2" />
    </div>
  );
};

