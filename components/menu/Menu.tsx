import { FC } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "../logo/Logo";
import { CloseButton } from "../closeButton/CloseButton";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { OurServices } from "./ourServices/OurServices";

interface IMenuProps {
  openMenu: boolean;
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

export const Menu: FC<IMenuProps> = ({
  handleMenu,
  openMenu,
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
    <div className="py-6 absolute lg:static lg:order-2 border-white lg:border-x-[1px] lg:w-full lg:flex lg:items-center">
      <div
        className={` transition duration-[800ms] ease-in-out ${
          openMenu ? "translate-x-0 " : "translate-x-[-100%]"
        } fixed min-w-[80px] max-w-[400px] w-full h-[100vh] top-0 left-0 z-20 lg:static lg:h-auto lg:max-w-[100%] lg:min-w-auto lg:top-auto lg:left-auto lg:translate-x-0 lg:transition-none`}
      >
        <nav
          onClick={(e) => e.stopPropagation()}
          className={` bg-[#111827] w-full z-20 min-h-screen h-full py-4  border-r-[3px]  border-white lg:border-none lg:h-auto lg:min-h-full lg:py-0 lg:px-4`}
        >
          <div className="block lg:hidden">
            <Logo />
          </div>
          <ul className="py-8 lg:flex lg:items-center lg:justify-center lg:gap-4 lg:py-0">
            <li className=" w-auto px-4 py-1 lg:flex lg:justify-center">
              <Link
                className={`w-full h-full text-sm text-slate-100 hover:text-yellow-500 cursor-pointer line ${
                  pathname === "/" ? "text-yellow-500 active-line" : ""
                }`}
                href={`/`}
              >
                Home
              </Link>
            </li>
            <li className="w-auto px-4 py-1 lg:flex lg:justify-center">
              <Link
                className={`w-auto h-full text-sm text-slate-100 hover:text-yellow-500 cursor-pointer line ${
                  pathname === "/about" ? "text-yellow-500 active-line" : ""
                }
                `}
                href={`/about`}
              >
                About
              </Link>
            </li>

            <OurServices
              openServices={openServices}
              handleServices={handleServices}
              openPreservation={openPreservation}
              handlePreservation={handlePreservation}
              openFleet={openFleet}
              handleFleet={handleFleet}
              isDesktop={isDesktop}
              openStyling={openStyling}
              handleStyling={handleStyling}
            />

            <li className="w-auto px-4 py-1 lg:flex lg:justify-center">
              <Link
                className={`w-full h-full text-sm text-slate-100 hover:text-yellow-500 cursor-pointer line  ${
                  pathname === "/financing" ? "text-yellow-500 active-line" : ""
                }`}
                href={`/financing`}
              >
                Financing
              </Link>
            </li>
            <li className="w-auto px-4 py-1 lg:flex lg:justify-center">
              <Link
                className={`w-full h-full text-sm text-slate-100 hover:text-yellow-500 cursor-pointer line ${
                  pathname === "/quote-equest"
                    ? "text-yellow-500 active-line"
                    : ""
                }`}
                href={`/quote-equest`}
              >
                Quote Request
              </Link>
            </li>
            <li className="w-auto px-4 py-1 lg:flex lg:justify-center">
              <Link
                  className="w-full h-full text-sm text-slate-100 hover:text-yellow-600 cursor-pointer line"
                  href={`/gallery`}
              >
                gallery
              </Link>
            </li>
          </ul>
          <div className="absolute top-5 right-4 cursor-pointer z-20 lg:hidden">
            <CloseButton
              handleMenu={() => {
                handleMenu(false);
                handleServices(false);
              }}
            />
          </div>
        </nav>
      </div>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
            }}
            className={`fixed top-0 left-0 w-full h-full z-10 backdrop-blur-[4px] lg:hidden`}
            onClick={() => {
              handleMenu(false);
              handleServices(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
