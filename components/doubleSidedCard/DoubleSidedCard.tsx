import { FC } from "react";
import { DoubleSidedCardItem } from "./doubleSidedCardItem/DoubleSidedCardItem";
import { Title } from "../title/Title";
import { IDoubleSidedCard } from "@/components/doubleSidedCard/doubleSidedCardItem/DoubleSidedCardItem";
interface IDoubleSidedCardProps {
  list: IDoubleSidedCard[];
}
import { v4 as uuidv4 } from "uuid";

export const DoubleSidedCard: FC<IDoubleSidedCardProps> = ({ list }) => {
  return (
    <div className="mb-16">
      <Title tag="h4" cn="mb-10">
        XPEL COATINGS
      </Title>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 row-gap-4 justify-center">
        {list.map((item) => {
          return <DoubleSidedCardItem key={uuidv4()} item={item} />;
        })}
      </ul>
    </div>
  );
};
