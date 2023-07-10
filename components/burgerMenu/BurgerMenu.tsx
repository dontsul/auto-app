import { FC } from 'react';

import { HiMenu } from 'react-icons/hi';

export interface IBurgerMenuProps {
  openMenu: boolean;
  handleMenu: (status: boolean) => void;
  isDesktop: boolean;
}

export const BurgerMenu: FC<IBurgerMenuProps> = ({ handleMenu, openMenu, isDesktop }) => {
  return (
    <>
      {!isDesktop && (
        <div
          className="flex items-center justify-start cursor-pointer "
          onClick={() => handleMenu(!openMenu)}
        >
          <HiMenu color="#ffffff" size={30} />
        </div>
      )}
    </>
  );
};
