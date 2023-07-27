import Image from "next/image";
import { FC } from "react";
import { IItemXpel } from "../xpelData";
interface IXpelCoatingsItemProps {
  item: IItemXpel;
}
export const XpelCoatingsItem: FC<IXpelCoatingsItemProps> = ({ item }) => {
  return (
    <div className="card h-[300px] relative m-6 cursor-pointer ">
      <div className="front bg-slate-300 absolute w-full h-full left-0 top-0 flex justify-center items-center trnsition duration-1000 rounded-md py-1 shadow-md shadow-slate-400">
        <Image
          src={item.image}
          alt={item.title}
          width={500}
          height={500}
          className="max-h-full max-w-full w-auto h-full"
        />
      </div>
      <div className="back bg-slate-400 absolute w-full h-full left-0 top-0 trnsition duration-1000 rounded-md py-4 px-4">
        <h6 className="text-center text-slate-50 font-semibold text-lg py-4 px-4">
          {item.title}
        </h6>
        <p className="text-sm text-[#111827] leading-6">{item.text}</p>
      </div>
    </div>
  );
};
