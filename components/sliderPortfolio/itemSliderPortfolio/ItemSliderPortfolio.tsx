import Image from "next/image";
import { FC } from "react";
import { IPortfolioList } from "@/interfaces/portfolio";

interface IItemSliderPortfolio {
  item: IPortfolioList;
}

export const ItemSliderPortfolio: FC<IItemSliderPortfolio> = ({ item }) => {
  return (
    <div className="max-w-[400px] w-full">
      <Image
        className="max-w-full w-full transition-all duration-500 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 h-[300px] object-cover object-center"
        src={item.image}
        alt={item.title}
        width={400}
        height={400}
      />
    </div>
  );
};
