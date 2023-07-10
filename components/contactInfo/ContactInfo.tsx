import { FC, useState, useEffect } from 'react';
import { Logo } from '../logo/Logo';
import { CloseButton } from '../closeButton/CloseButton';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { IoMdArrowDropdown } from 'react-icons/io';

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
    <div className="absolute border-white lg:border-x-[1px] lg:w-full">
      <div
        className={` transition duration-[800ms] ease-in-out ${
          openContactInfo ? 'translate-x-0 ' : 'translate-x-[100%]'
        } fixed min-w-[80px] max-w-[400px] w-full h-[100vh] top-0 right-0 z-20 lg:static lg:h-auto lg:max-w-[100%] lg:min-w-auto lg:top-auto lg:left-auto lg:translate-x-0 lg:transition-none`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative bg-zinc-800 w-full z-20 h-screen py-4 px-8 border-r-[3px]  border-white lg:border-none lg:h-auto lg:py-0 lg:px-4`}
        >
          {!isDesktop && <Logo />}
        </div>
      </div>
    </div>
  );
};
