import { FC } from 'react';
import { Logo } from '../logo/Logo';
import { CloseButton } from '../closeButton/CloseButton';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface IMenuProps {
  openMenu: boolean;
  handleMenu: (status: boolean) => void;
}

const menuList = [
  { title: 'Home' },
  { title: 'About' },
  {
    title: 'Services',
    category: [{ title: 'Exhaust' }, { title: 'Brakes' }, { title: 'Bumpers' }, { title: 'Tires' }],
  },
  { title: 'Brands' },
  { title: 'Apex +' },
  { title: 'Financing' },
  { title: 'Contact Us' },
];

export const Menu: FC<IMenuProps> = ({ handleMenu, openMenu }) => {
  return (
    <div className="absolute ">
      <div
        onClick={() => handleMenu(false)}
        className={`transition duration-[800ms] ease-in-out ${
          openMenu ? 'translate-x-0' : 'translate-x-[-100%]'
        } fixed w-[100vh] h-[100vh] top-0 left-0 z-20 `}
      >
        <nav
          onClick={(e) => e.stopPropagation()}
          className={`relative bg-zinc-800  min-w-[80px] max-w-[400px] w-full z-20 h-screen py-4 px-8 border-r-[3px] border-white`}
        >
          <Logo />
          <ul className="space-y-3 py-8">
            <li className="itemMenu w-full px-4 py-2  cursor-pointer transition duration-[100ms] ease flex items-center justify-between">
              <Link className="w-full h-full text-lg text-slate-100 " href={`/`}>
                Home
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
