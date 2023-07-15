// use client

import React from "react";
import SliderCard from "./SliderCard";
import { Data } from "@/components/slider/Sliders";

type Props = {
  data: Data[];
};

function Slides({ data }: Props) {
  return (
    <div className="flex w-full gap-6 ">
      {data.map((data, i) => {
        return <SliderCard key={i} data={data} />;
      })}
    </div>
  );
}

export default Slides;
