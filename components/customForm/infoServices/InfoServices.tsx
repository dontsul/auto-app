import { FC } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

interface IInfo {
  titleInfo: string;
  list: string[];
}

interface IInfoServicesProps {
  info: IInfo;
}
export const InfoServices: FC<IInfoServicesProps> = ({ info }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
      }}
      className="max-w-[300px] w-full rounded-md bg-[#111827] py-2 px-2 absolute top-[54px] z-30 "
    >
      <h6 className="text-slate-50 text-lg mb-2">{info.titleInfo}</h6>
      <ul className="flex flex-col gap-[3px]">
        {info.list.map((item) => {
          console.log(item);

          return (
            <li className="text-sm text-slate-100 font-thin" key={uuidv4()}>
              • {item}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};
