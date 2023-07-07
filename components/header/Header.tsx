'use client';

import { Logo } from '../logo/Logo';
import { BurgerMenu } from '../burgerMenu/BurgerMenu';
import { ButtonSearch } from '../buttonSearch/ButtonSearch';

export const Header = () => {
  return (
    <header className="bg-[#272725] py-6 px-8 sticky grid grid-cols-3">
      <BurgerMenu />
      <Logo />
      <ButtonSearch />
    </header>
  );
};
