"use client";
import { FC } from "react";
import { IPartner } from "../../../interfaces/partners";
import Image from "next/image";

interface IItemPartnersSliderProps {
  partner: IPartner;
}

export const ItemPartnersSlider: FC<IItemPartnersSliderProps> = ({ partner }) => {
  return (
    <div className="mx-auto my-4  min-w-[100px] max-w-[220px] w-full bg-slate-50 shadow-[5px_5px_5px_0px_rgba(0,0,0,0.10)] rounded-[10px] p-0 h-full">
      <a
        href={partner.link}
        className="flex items-center justify-center h-full w-full"
        target="_blanck"
      >
        <Image
          src={partner.image}
          alt={partner.title}
          width={500}
          height={700}
          className={`w-ful h-full transition duration-500`}
        />
      </a>
    </div>
  );
};
