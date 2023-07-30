import { FC } from "react";
import { motion } from "framer-motion";

interface IInfo {
  titleInfo: string;
  textInfo: string;
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
      className="max-w-[300px] w-full rounded-md bg-[#111827] py-4 px-4 absolute top-[50px] z-30 "
    >
      <h6 className="text-slate-50 text-lg mb-2">{info.titleInfo}</h6>
      <p className="text-slate-300 text-xss">{info.textInfo}</p>
    </motion.div>
  );
};
