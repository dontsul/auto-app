import { XpelCoatingsItem } from "./xpelCoatingsItem/XpelCoatingsItem";
import { listXpel } from "./xpelData";
import { Title } from "../title/Title";

import { v4 as uuidv4 } from "uuid";

export const XpelCoatings = () => {
  return (
    <div className="mb-16">
      <Title tag="h4" cn="mb-10">
        XPEL COATINGS
      </Title>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 row-gap-4 justify-center">
        {listXpel.map((item) => {
          return <XpelCoatingsItem key={uuidv4()} item={item} />;
        })}
      </ul>
    </div>
  );
};
