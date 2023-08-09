import Image from "next/image";
import { FC } from "react";
import { StaticImageData } from "next/image";

export interface IDoubleSidedCard {
  image: StaticImageData;
  title: string;
  text: string;
}

interface IDoubleSidedCardItemProps {
  item: IDoubleSidedCard;
}
export const DoubleSidedCardItem: FC<IDoubleSidedCardItemProps> = ({
  item,
}) => {
  return (
    <div className="card h-[320px] relative m-2 cursor-pointer ">
      <div className="bg-[#111827] front absolute w-full h-full left-0 top-0 flex justify-center items-center trnsition duration-1000 rounded-md py-1 shadow-md shadow-slate-400">
        <Image
          src={item.image}
          alt={item.title}
          width={700}
          height={700}
          className="max-h-full max-w-full w-auto h-full"
        />
      </div>
      <div className="back bg-[#111827] absolute w-full h-full left-0 top-0 trnsition duration-1000 rounded-md py-4 px-4">
        <h6 className="text-center text-slate-50 font-semibold text-lg py-4 px-4">
          {item.title}
        </h6>
        <p className="text-sm text-slate-300 leading-6">{item.text}</p>
      </div>
    </div>
  );
};
