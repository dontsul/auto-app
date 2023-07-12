import { FC, useState, useEffect } from 'react';
import { Logo } from '../logo/Logo';
import { CloseButton } from '../closeButton/CloseButton';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { IoMdArrowDropdown } from 'react-icons/io';

interface IMenuProps {
  openMenu: boolean;
  handleMenu: (status: boolean) => void;
  openServices: boolean;
  handleServices: (statusServices: boolean) => void;
  isDesktop: boolean;
}
export const Menu: FC<IMenuProps> = ({
  handleMenu,
  openMenu,
  openServices,
  handleServices,
  isDesktop,
}) => {
  return (
    <div className="py-6 absolute lg:static lg:order-2 border-white lg:border-x-[1px] lg:w-full">
      <div
        className={` transition duration-[800ms] ease-in-out ${
          openMenu ? 'translate-x-0 ' : 'translate-x-[-100%]'
        } fixed min-w-[80px] max-w-[400px] w-full h-[100vh] top-0 left-0 z-20 lg:static lg:h-auto lg:max-w-[100%] lg:min-w-auto lg:top-auto lg:left-auto lg:translate-x-0 lg:transition-none`}
      >
        <nav
          onClick={(e) => e.stopPropagation()}
          className={`relative bg-zinc-800 w-full z-20 h-screen py-4 px-8 border-r-[3px]  border-white lg:border-none lg:h-auto lg:py-0 lg:px-4`}
        >
          <div className="block lg:hidden">
            <Logo />
          </div>
          <ul className="py-8 lg:flex lg:items-center lg:justify-center lg:gap-4 lg:py-0">
            <li className=" w-auto px-4 py-1 lg:flex lg:justify-center">
              <Link
                className="w-full h-full text-lg text-slate-100 hover:text-yellow-600 cursor-pointer line
                "
                href={`/`}
              >
                Home
              </Link>
            </li>
            <li className="w-auto px-4 py-1 lg:flex lg:justify-center">
              <Link
                className="w-auto h-full text-lg text-slate-100 hover:text-yellow-600 cursor-pointer line
                "
                href={`/about`}
              >
                About
              </Link>
            </li>
            <li
              className="w-auto px-4 py-1 lg:flex lg:justify-center"
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
                  className="inline h-full text-lg text-slate-100 hover:text-yellow-600 cursor-pointer line"
                  href={`/`}
                >
                  Services
                </Link>
                <motion.div
                  animate={{ rotate: openServices ? 180 : 0 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                  className="cursor-pointer"
                  onClick={() => handleServices(!openServices)}
                >
                  <IoMdArrowDropdown color={'#f1f5f9'} size={25} />
                </motion.div>
              </div>

              <AnimatePresence>
                {openServices && (
                  <motion.ul
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: 'auto',
                    }}
                    exit={{ height: 0 }}
                    style={{ overflow: 'hidden' }}
                    transition={{ duration: 0.5 }}
                    className="px-8 static lg:absolute lg:bg-zinc-800 top-9 lg:rounded-md lg:shadow-xl "
                  >
                    <li className="mt-0 pt-2 w-auto px-4 py-1 lg:mt-6">
                      <Link
                        className="inline h-full text-lg text-slate-100 hover:text-yellow-600 cursor-pointer line"
                        href={`/`}
                      >
                        Exhaust
                      </Link>
                    </li>
                    <li className="inline px-4 py-1 transition">
                      <Link
                        className="w-auto h-full text-lg text-slate-100 hover:text-yellow-600 cursor-pointer line"
                        href={`/`}
                      >
                        Brakes
                      </Link>
                    </li>
                    <li className="w-auto px-4 py-1 transition mb-0 lg:mb-4">
                      <Link
                        className="inline h-full text-lg text-slate-100 hover:text-yellow-600 cursor-pointer line"
                        href={`/`}
                      >
                        Tires
                      </Link>
                    </li>

                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li className="w-auto px-4 py-1 lg:flex lg:justify-center">
              <Link
                className="w-full h-full text-lg text-slate-100 hover:text-yellow-600 cursor-pointer line"
                href={`/`}
              >
                Brands
              </Link>
            </li>
            <li className="w-auto px-4 py-1 lg:flex lg:justify-center">
              <Link
                className="w-full h-full text-lg text-slate-100 hover:text-yellow-600 cursor-pointer line"
                href={`/`}
              >
                Apex +
              </Link>
            </li>

            <li className="w-auto px-4 py-1 transition duration-[100ms] ease lg:flex lg:justify-center">
              <Link
                className="w-full h-full text-lg text-slate-100 hover:text-yellow-600 cursor-pointer line"
                href={`/`}
              >
                Contact Us
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
