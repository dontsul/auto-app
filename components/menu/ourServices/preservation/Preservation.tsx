import { FC, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";

interface IPreservationProps {
  openPreservation: boolean;
  handlePreservation: (statusPreservation: boolean) => void;
  isDesktop: boolean;
}

export const Preservation: FC<IPreservationProps> = ({
  openPreservation,
  handlePreservation,
  isDesktop,
}) => {
  const ref = useRef<HTMLUListElement | null>(null);
  return (
    <li
      className="w-auto pl-4 py-1 lg:flex lg:justify-center"
      onMouseLeave={() => {
        if (!isDesktop) {
          return;
        }
        handlePreservation(false);
      }}
      onMouseEnter={() => {
        if (!isDesktop) {
          return;
        }
        handlePreservation(true);
      }}
    >
      <div className="flex items-center justify-between  w-full relative">
        <Link
          className="inline h-full text-sm text-slate-100 hover:text-yellow-600 cursor-pointer line"
          href={`/`}
        >
          Vehicle Preservation
        </Link>
        <motion.div
          animate={{ rotate: openPreservation ? 180 : 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="cursor-pointer"
          onClick={() => handlePreservation(!openPreservation)}
        >
          <IoMdArrowDropdown color={"#f1f5f9"} size={25} />
        </motion.div>
      </div>

      <AnimatePresence>
        {openPreservation && (
          <motion.ul
            ref={ref}
            initial={
              !isDesktop
                ? {
                    height: 0,
                  }
                : { opacity: 0 }
            }
            animate={
              !isDesktop
                ? {
                    height: "auto",
                  }
                : { opacity: 1 }
            }
            exit={!isDesktop ? { height: 0 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`overflow-hidden pl-4 lg:px-4 static top-14  lg:shadow-xl lg:absolute lg:left-[192px] lg:bg-zinc-800 lg:w-full min-w-auto lg:min-w-[220px] lg:overflow-visible`}
          >
            <li className="mt-0 pt-2 lg:pt-0 w-auto px-4 py-1 lg:mt-6">
              <Link
                className="text-sm inline h-full text-slate-100 hover:text-yellow-600 cursor-pointer line"
                href={`/`}
              >
                Paint Protection Film
              </Link>
            </li>
            <li className="inline px-4 py-1 transition">
              <Link
                className="text-sm w-auto h-full text-slate-100 hover:text-yellow-600 cursor-pointer line"
                href={`/`}
              >
                Detailing and Paint
              </Link>
            </li>
            <li className="w-auto px-4 py-1 transition">
              <Link
                className="text-sm inline h-full text-slate-100 hover:text-yellow-600 cursor-pointer line"
                href={`/`}
              >
                Ceramic Coatings
              </Link>
            </li>
            <li className="w-auto px-4 py-1 mb-0 lg:mb-4">
              <Link
                className="text-sm inline h-full text-slate-100 hover:text-yellow-600 cursor-pointer line"
                href={`/`}
              >
                Rust Prevention
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};
