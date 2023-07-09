'use client';
import { useState, useEffect } from 'react';

import { Logo } from '../logo/Logo';
import { BurgerMenu } from '../burgerMenu/BurgerMenu';
import { ButtonSearch } from '../buttonSearch/ButtonSearch';
import { Menu } from '../menu/Menu';

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [openServices, setOpenServices] = useState<boolean>(false);

  const handleMenu = (status: boolean) => {
    setOpenMenu(status);
  };
  const handleServices = () => {
    setOpenServices(!openServices);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 1023) {
      setOpenMenu(false);
      setOpenServices(false);
    }
  }, [windowWidth]);

  return (
      <header className=" z-30 bg-zinc-800 py-6 px-8 sticky grid grid-cols-3">
        <BurgerMenu openMenu={openMenu} handleMenu={handleMenu} />
        <Logo />
        <Menu
            openMenu={openMenu}
            handleMenu={handleMenu}
            openServices={openServices}
            handleServices={handleServices}
        />
        <ButtonSearch />
      </header>
  );
};