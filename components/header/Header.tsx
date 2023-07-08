'use client';
import { useState } from 'react';

import { Logo } from '../logo/Logo';
import { BurgerMenu } from '../burgerMenu/BurgerMenu';
import { ButtonSearch } from '../buttonSearch/ButtonSearch';
import { Menu } from '../menu/Menu';

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleMenu = (status: boolean) => {
    setOpenMenu(status);
  };

  return (
    <header className="bg-zinc-800 py-6 px-8 sticky grid grid-cols-3">
      <BurgerMenu openMenu={openMenu} handleMenu={handleMenu} />
      <Logo />
      <Menu openMenu={openMenu} handleMenu={handleMenu} />
      <ButtonSearch />
    </header>
  );
};
