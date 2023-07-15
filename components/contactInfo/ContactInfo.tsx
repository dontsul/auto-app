import {FC} from 'react';
import {Logo} from '../logo/Logo';
import {CloseButton} from '../closeButton/CloseButton';
import {motion, AnimatePresence} from 'framer-motion';
import {BsInstagram, BsFacebook, BsTwitter, BsFillTelephoneFill} from 'react-icons/bs';
import {SiGooglemaps} from 'react-icons/si';
import {TbMailFilled} from 'react-icons/tb';

interface IContactInfo {
    openContactInfo: boolean;
    handleContactInfo: (status: boolean) => void;
}

export const ContactInfo: FC<IContactInfo> = ({handleContactInfo, openContactInfo}) => {
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
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-center ">
                            <Logo/>
                        </div>
                        <div className="w-[80px] h-[80px] flex items-center justify-center bg-zinc-700">
                            <CloseButton handleMenu={() => handleContactInfo(false)}/>
                        </div>
                    </div>
                    <div className="py-8 px-8">
                        {' '}
                        <h4 className="uppercase text-[24px] text-start font-extrabold text-slate-300 mb-8">
                            Contact Info
                        </h4>
                        <div className="py-4">
                            <SiGooglemaps
                                size={20}
                                className="w-auto h-full  text-slate-100  cursor-pointer mb-2"
                            />
                            <a
                                className="w-auto h-full text-base text-slate-100 hover:text-yellow-600 cursor-pointer line"
                                href="#!"
                            >
                                2131 9th St, Sacramento, CA 95818, USA
                            </a>
                        </div>
                        <div className="py-4">
                            <BsFillTelephoneFill
                                size={20}
                                className="w-auto h-full  text-slate-100  cursor-pointer mb-2"
                            />
                            <a
                                className="w-auto h-full text-base text-slate-100 hover:text-yellow-600 cursor-pointer line"
                                href="tel:123-456-7891"
                            >
                                123-456-7891
                            </a>
                        </div>
                        <div className="py-4">
                            <TbMailFilled
                                size={20}
                                className="w-auto h-full  text-slate-100  cursor-pointer mb-2"
                            />
                            <a
                                className="w-auto h-full text-base text-slate-100 hover:text-yellow-600 cursor-pointer line"
                                href="mailto:info@mailauto.com"
                            >
                                info@mailauto.com
                            </a>
                        </div>
                        <div className=" border-white border-b-[1px] w-full"></div>
                        <div className="flex items-center gap-4 py-4">
                            <a href="https://www.instagram.com/">
                                <BsInstagram
                                    size={17}
                                    className="text-slate-100 cursor-pointer hover:text-yellow-600 transition"
                                />
                            </a>
                            <a href="https://www.facebook.com/">
                                <BsFacebook
                                    size={17}
                                    className="text-slate-100 cursor-pointer hover:text-yellow-600 transition"
                                />
                            </a>
                            <a href="https://twitter.com/">
                                {' '}
                                <BsTwitter
                                    size={17}
                                    className="text-slate-100 cursor-pointer hover:text-yellow-600 transition"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {openContactInfo && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
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
