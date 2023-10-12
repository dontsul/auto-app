import React from "react";
import SliderCard from "./SliderCard";
import { DataSlider } from "@/data/dataSliderHome/DataTepe";

type Props = {
    data: DataSlider[];
};

function Slides({ data }: Props) {
    return (
        <div className="flex w-full gap-6">
            {data.map((slide) => (
                <SliderCard key={slide.img} data={slide} />
            ))}
        </div>
    );
}

export default Slides;
