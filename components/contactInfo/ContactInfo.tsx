import { FC, useState, useEffect } from 'react';
import { Logo } from '../logo/Logo';
import { CloseButton } from '../closeButton/CloseButton';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { IoMdArrowDropdown } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';

interface IContactInfo {
  openContactInfo: boolean;
  handleContactInfo: (status: boolean) => void;
  isDesktop: boolean;
}
export const ContactInfo: FC<IContactInfo> = ({
  handleContactInfo,
  openContactInfo,
  isDesktop,
}) => {
  return (
    <div className="absolute">
      <div
        className={` transition duration-[800ms] ease-in-out border-white border-x-[1px] ${
          openContactInfo ? 'translate-x-0' : 'translate-x-[100%]'
        } fixed min-w-[80px] max-w-[400px] w-full h-[100vh] top-0 right-0 z-20`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative bg-zinc-800 w-full z-20 h-screen border-r-[3px`}
        >
          <div className="flex items-center justify-end">
            <div className="w-[80px] h-[80px] flex item-center justify-center bg-zinc-700">
              <RxCross2
                className="cursor-pointer"
                size={25}
                color="#ffffff"
                onClick={() => handleContactInfo(false)}
              />
            </div>
          </div>
          <div className="py-8 px-8">
            {' '}
            <div className="flex items-center justify-center mb-4">
              <Logo />
            </div>
            <div>
              <a href="#!">2131 9th St, Sacramento, CA 95818, USA</a>
            </div>
            <div>
              <a href="tel:123-456-7891">123-456-7891</a>
            </div>
            <div>
              <a href="mailto:info@mailauto.com">info@mailauto.com</a>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {openContactInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
            }}
            className={`fixed top-0 left-0 w-full h-full z-10 backdrop-blur-[4px]`}
            onClick={() => {
              handleContactInfo(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
