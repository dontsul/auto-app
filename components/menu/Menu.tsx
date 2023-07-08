import { FC, useState } from 'react';
import { Logo } from '../logo/Logo';
import { CloseButton } from '../closeButton/CloseButton';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { IoMdArrowDropdown } from 'react-icons/io';

interface IMenuProps {
  openMenu: boolean;
  handleMenu: (status: boolean) => void;
}

const menuList = [
  { title: 'Home' },
  { title: 'About' },
  {
    title: 'Services',
    category: [{ title: 'Exhaust' }, { title: 'Brakes' }, { title: 'Tires' }],
  },
  { title: 'Brands' },
  { title: 'Apex +' },
  { title: 'Financing' },
  { title: 'Contact Us' },
];

export const Menu: FC<IMenuProps> = ({ handleMenu, openMenu }) => {
  const [openServices, setOpenServices] = useState<boolean>(false);

  return (
    <div className="absolute bg-black ">
      <div
        onClick={() => handleMenu(false)}
        className={`transition duration-[800ms] ease-in-out ${
          openMenu ? 'translate-x-0' : 'translate-x-[-100%]'
        } fixed min-w-[80px] max-w-[400px] w-full h-[100vh] top-0 left-0 z-20 `}
      >
        <nav
          onClick={(e) => e.stopPropagation()}
          className={`relative bg-zinc-800  min-w-[80px] max-w-[400px] w-full z-20 h-screen py-4 px-8 border-r-[3px] border-white`}
        >
          <Logo />
          <ul className=" py-8">
            <li className=" w-full px-4 py-1   transition duration-[100ms] ease ">
              <Link
                className="w-full h-full text-lg text-slate-100 hover:text-yellow-600 cursor-pointer line
                "
                href={`/`}
              >
                Home
              </Link>
            </li>
            <li className=" w-full px-4 py-1 transition duration-[100ms] ease ">
              <Link
                className="w-full h-full text-lg text-slate-100 hover:text-yellow-600 cursor-pointer line
                "
                href={`/`}
              >
                About
              </Link>
            </li>
            <li className=" w-full px-4 py-1 transition duration-[100ms] ease ">
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
                  onClick={() => setOpenServices(!openServices)}
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
                    className="px-8"
                  >
                    <li className="pt-2 w-full px-4 py-1">
                      <Link
                        className="inline h-full text-lg text-slate-100 hover:text-yellow-600 cursor-pointer line"
                        href={`/`}
                      >
                        Exhaust
                      </Link>
                    </li>
                    <li className="inline px-4 py-1 transition">
                      <Link
                        className="w-full h-full text-lg text-slate-100 hover:text-yellow-600 cursor-pointer line"
                        href={`/`}
                      >
                        Brakes
                      </Link>
                    </li>
                    <li className=" w-full px-4 py-1 transition">
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
            <li className=" w-full px-4 py-1 transition duration-[100ms] ease ">
              <Link
                className="w-full h-full text-lg text-slate-100 hover:text-yellow-600 cursor-pointer line"
                href={`/`}
              >
                Brands
              </Link>
            </li>
            <li className=" w-full px-4 py-1 transition duration-[100ms] ease ">
              <Link
                className="w-full h-full text-lg text-slate-100 hover:text-yellow-600 cursor-pointer line"
                href={`/`}
              >
                Apex +
              </Link>
            </li>
            <li className=" w-full px-4 py-1 transition duration-[100ms] ease ">
              <Link
                className="w-full h-full text-lg text-slate-100 hover:text-yellow-600 cursor-pointer line"
                href={`/`}
              >
                Financing
              </Link>
            </li>
            <li className=" w-full px-4 py-1 transition duration-[100ms] ease ">
              <Link
                className="w-full h-full text-lg text-slate-100 hover:text-yellow-600 cursor-pointer line"
                href={`/`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <CloseButton handleMenu={() => handleMenu(false)} />
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
            className={`fixed top-0 left-0 w-full h-full z-10 backdrop-blur-[4px]`}
            onClick={() => handleMenu(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
