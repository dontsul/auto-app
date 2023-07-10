'use client';
import { useState, useEffect } from 'react';

import { Logo } from '../logo/Logo';
import { BurgerMenu } from '../burgerMenu/BurgerMenu';
import { ButtonSearch } from '../buttonSearch/ButtonSearch';
import { Menu } from '../menu/Menu';
import { ContactInfo } from '../contactInfo/ContactInfo';
import { ContactInfoBtn } from '../contactInfoBtn/ContactInfoBtn';

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openContactInfo, setOpenContactInfo] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [openServices, setOpenServices] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.innerWidth && window.innerWidth > 1023 ? true : false
  );

  const handleMenu = (status: boolean) => {
    setOpenMenu(status);
  };
  const handleContactInfo = (status: boolean) => {
    setOpenContactInfo(status);
  };
  const handleServices = (statusServices: boolean) => {
    setOpenServices(statusServices);
  };

  useEffect(() => {
    setIsDesktop(window.innerWidth > 1023 ? true : false);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      const isDesktop = window.innerWidth > 1023;
      setIsDesktop(isDesktop);
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
    <header className="bg-zinc-800  px-8 sticky  z-30">
      <div className="py-8 grid grid-cols-3 lg:px-0 lg:grid-cols-[auto_1fr_auto]">
        {!isDesktop && (
          <BurgerMenu openMenu={openMenu} handleMenu={handleMenu} isDesktop={isDesktop} />
        )}
        <div className="lg:order-1 flex items-center justify-center">
          <Logo />
        </div>
        <Menu
          openMenu={openMenu}
          handleMenu={handleMenu}
          openServices={openServices}
          handleServices={handleServices}
          isDesktop={isDesktop}
        />
        <ButtonSearch isDesktop={isDesktop} />
        {isDesktop && <ContactInfoBtn />}
        {/* {isDesktop && (
        <ContactInfo
          handleContactInfo={handleContactInfo}
          openContactInfo={openContactInfo}
          isDesktop={isDesktop}
        />
      )} */}
      </div>
    </header>
  );
};
