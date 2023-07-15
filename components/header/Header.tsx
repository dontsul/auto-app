'use client';
import {useState, useEffect} from 'react';
import {Logo} from '../logo/Logo';
import {BurgerMenu} from '../burgerMenu/BurgerMenu';
import {ButtonSearch} from '../buttonSearch/ButtonSearch';
import {Menu} from '../menu/Menu';
import {ContactInfo} from '../contactInfo/ContactInfo';
import {ContactInfoBtn} from '../contactInfoBtn/ContactInfoBtn';
import Link from 'next/link';

export const Header = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [openContactInfo, setOpenContactInfo] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [openServices, setOpenServices] = useState<boolean>(false);
    const [isDesktop, setIsDesktop] = useState<boolean>(false);

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
        <header className="px-8 lg:px-0 bg-zinc-800 sticky z-30 grid grid-cols-3 lg:grid-cols-[auto_1fr_auto]">
            <BurgerMenu openMenu={openMenu} handleMenu={handleMenu}/>
            <div className="lg:order-1 flex items-center justify-center py-6">
                <Link href={`/`}>
                    {' '}
                    <Logo/>
                </Link>
            </div>
            <Menu
                openMenu={openMenu}
                handleMenu={handleMenu}
                openServices={openServices}
                handleServices={handleServices}
                isDesktop={isDesktop}
            />
            <ButtonSearch isDesktop={isDesktop}/>
            <ContactInfoBtn handleContactInfo={handleContactInfo}/>
            <ContactInfo openContactInfo={openContactInfo} handleContactInfo={handleContactInfo}/>
        </header>
    );
};
