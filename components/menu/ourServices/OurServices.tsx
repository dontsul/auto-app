import { FC, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";
import { Preservation } from "./preservation/Preservation";
import { Fleet } from "./fleet/Fleet";
import { Styling } from "./styling/Styling";
import { usePathname } from "next/navigation";

interface IOurServicesProps {
  handleMenu: (status: boolean) => void;
  openServices: boolean;
  handleServices: (statusServices: boolean) => void;
  openPreservation: boolean;
  handlePreservation: (statusPreservation: boolean) => void;
  openFleet: boolean;
  handleFleet: (statusFleet: boolean) => void;
  openStyling: boolean;
  handleStyling: (statusStyling: boolean) => void;
  isDesktop: boolean;
}

export const OurServices: FC<IOurServicesProps> = ({
  handleMenu,
  openServices,
  handleServices,
  openPreservation,
  handlePreservation,
  openFleet,
  handleFleet,
  openStyling,
  handleStyling,
  isDesktop,
}) => {
  const pathname = usePathname();
  return (
    <li
      className="w-auto px-4  lg:flex lg:justify-center py-2"
      onMouseLeave={() => {
        if (!isDesktop) {
          return;
        }
        handleServices(false);
      }}
      onMouseEnter={() => {
        if (!isDesktop) {
          return;
        }
        handleServices(true);
      }}
    >
      <div className="flex items-center justify-between  w-full">
        <Link
          className={` h-full text-sm text-slate-100 hover:text-yellow-500 cursor-pointer line flex items-center justify-between ${
            pathname === "/our-services" ? "text-yellow-500 active-line" : ""
          }`}
          href={`/our-services`}
          onClick={() => {
            handleMenu(false);
          }}
        >
          Our Services
        </Link>
        <motion.div
          animate={{ rotate: openServices ? 180 : 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="cursor-pointer"
          onClick={() => {
            handleStyling(false);
            handleFleet(false);
            handlePreservation(false);
            handleServices(!openServices);
          }}
        >
          <IoMdArrowDropdown color={"#f1f5f9"} size={25} />
        </motion.div>
      </div>

      <AnimatePresence>
        {openServices && (
          <motion.ul
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
            transition={{ duration: 0.4 }}
            className={`overflow-hidden lg:overflow-visible pl-2 lg:absolute lg:bg-[#111827] top-9 lg:shadow-xl lg:px-2 lg:py-4`}
          >
            <li className="mt-0 pt-2 w-auto pl-4 py-1 lg:mt-6">
              <Link
                className={`inline h-full text-sm text-slate-100 hover:text-yellow-500 cursor-pointer line ${
                  pathname === "/our-services/patriot-liner"
                    ? "text-yellow-500 active-line"
                    : ""
                }`}
                href={`/our-services/patriot-liner`}
                onClick={() => {
                  handleMenu(false);
                }}
              >
                Patriot Liner
              </Link>
            </li>

            <Preservation
              handleMenu={handleMenu}
              openPreservation={openPreservation}
              handlePreservation={handlePreservation}
              isDesktop={isDesktop}
            />

            <Fleet
              handleMenu={handleMenu}
              openFleet={openFleet}
              handleFleet={handleFleet}
              isDesktop={isDesktop}
            />
            <Styling
              handleMenu={handleMenu}
              openStyling={openStyling}
              handleStyling={handleStyling}
              isDesktop={isDesktop}
            />
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};
