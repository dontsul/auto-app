"use client";
import React, {useState} from "react";
import {Title} from "@/components/title/Title";
import {motion} from "framer-motion";
import Image from "next/image";
import images from "@/public/Aston-Martin-White.png";
import images2 from "@/public/Ceramic.png";
import images3 from "@/public/Ceramic2.png"
import images4 from "@/public/Ceramic3.png"
import images5 from "@/public/Ceramic4.png"

import {ListTintPages} from "@/components/ourServices/windowTintPages/ListTintPages";
export const text1 = ["Gloss Enhancement","Grime Resistance","Grime Resistance","Grime Resistance"," Easy Cleaning","Minor Scratch Protection","1 Year Warranty" ];
export const text2 = ["Superior Gloss Boost","Dirt Repellant","Enhanced Durability","Environmental Damage Protection"," 4 Year Warranty" ];
export const text3 = ["Matte Enhancement","Non-Glossy Protection","Environmental Defense","Uniform Finish Maintenance"," Maximum Durability","4 Year Warranty" ];
export const text4 = ["Superior Hydrophobic Properties","Ultimate Gloss Enhancement","Long-Lasting Protection","Superior Scratch Defense"," 8 year Warranty" ];



export function CeramicCoatingsPages (){
    const [currentText, setCurrentText] = useState('FULL FRONT');
    const [currentImage, setCurrentImage] = useState('path-to-prime-cs-image');
    const handleButtonClick = (text: string, image: string) => {
        setCurrentText(text);
        setCurrentImage(image);
    };
    const imageAbout = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="container py-10">
            <Title tag="h4" cn="mt-24 sm:mt-[6px] md:mt-[20px] lg:mt-[28px] mb-14">
                CERAMIC COATING <span className="text-yellow-500">PACKAGES</span>
            </Title>
            <div className=" pb-20 grid lg:grid-cols-[240px_auto_340px] gap-12  justify-center">
                <div className="m-5 rounded-md" role="group">
                    <button
                        type="button"
                        className={`w-full py-5 text-sm font-medium ${
                            currentText === 'FULL FRONT'
                                ? 'text-white bg-gray-900'
                                : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                        }`}
                        onClick={() => handleButtonClick('FULL FRONT', 'path-to-prime-cs-image.jpg')}
                    >
                        Fusion Lite
                    </button>
                    <button
                        type="button"
                        className={`w-full py-5 text-sm font-medium ${
                            currentText === 'TRACK PACK'
                                ? 'text-white bg-gray-900'
                                : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                        }`}
                        onClick={() => handleButtonClick('TRACK PACK', 'path-to-prime-xr-image.jpg')}
                    >
                        Fusion Plus
                    </button>
                    <button
                        type="button"
                        className={`w-full py-5 text-sm font-medium ${
                            currentText === 'FULL BODY'
                                ? 'text-white bg-gray-900'
                                : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                        }`}
                        onClick={() => handleButtonClick('FULL BODY', 'path-to-prime-xr-image.jpg')}
                    >
                        Fusion Satin
                    </button>
                    <button
                        type="button"
                        className={`w-full py-5 text-sm font-medium ${
                            currentText === 'FORT KNOX'
                                ? 'text-white bg-gray-900'
                                : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                        }`}
                        onClick={() => handleButtonClick('FORT KNOX', 'path-to-prime-cs-image.jpg')}
                    >
                        Fusion Premium
                    </button>
                </div>
                <div className=" ">
                    {currentText === 'FULL FRONT' && (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={imageAbout}
                            viewport={{ once: true }}
                            className="  flex justify-center brightness-75 order-1 lg:order-2 max-w-full"
                        >
                            <Image
                                className="absolute rounded-2xl lg:rounded-2xl  brightness-75 max-w-full"
                                width={500}
                                height={500}
                                src={images}
                                alt="bg"
                            />
                            <Image
                                className="rounded-2xl lg:rounded-2xl  brightness-75 max-w-full"
                                width={500}
                                height={500}
                                src={images2}
                                alt="bg"
                            />
                        </motion.div>
                    )}
                    {currentText === 'TRACK PACK' && (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={imageAbout}
                            viewport={{ once: true }}
                            className="  flex justify-center brightness-75 order-1 lg:order-2"
                        >
                            <Image
                                className=" rounded-2xl lg:rounded-2xl  brightness-75 max-w-full"
                                width={500}
                                height={500}
                                src={images}
                                alt="bg"
                            />
                            <Image
                                className="absolute rounded-2xl lg:rounded-2xl  brightness-75 max-w-full"
                                width={500}
                                height={500}
                                src={images3}
                                alt="bg"
                            />
                        </motion.div>
                    )}
                    {currentText ==='FULL BODY' && (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={imageAbout}
                            viewport={{ once: true }}
                            className=" flex justify-center brightness-75 order-1 lg:order-2"
                        >
                            <Image
                                className="absolute rounded-2xl lg:rounded-2xl  brightness-75 max-w-full"
                                width={500}
                                height={500}
                                src={images}
                                alt="bg"
                            />
                            <Image
                                className="rounded-2xl lg:rounded-2xl  brightness-75 max-w-full"
                                width={500}
                                height={500}
                                src={images4}
                                alt="bg"
                            />
                        </motion.div>
                    )}
                    {currentText ==='FORT KNOX' && (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={imageAbout}
                            viewport={{ once: true }}
                            className=" flex justify-center brightness-75 order-1 lg:order-2"
                        >
                            <Image
                                className="absolute rounded-2xl lg:rounded-2xl   max-w-full "
                                width={500}
                                height={500}
                                src={images}
                                alt="bg"
                            />
                            <Image
                                className="rounded-2xl lg:rounded-2xl  brightness-75 "
                                width={500}
                                height={500}
                                src={images5}
                                alt="bg"
                            />
                        </motion.div>
                    )}

                </div>
                <div className="flex justify-between ">
                    <div className="flex flex-col">
                        {currentText === 'FULL FRONT' && (
                            <h1 className="text-[13px] text-yellow-500 font-semibold">COATING INFO</h1>
                        )}
                        {currentText === 'TRACK PACK' && (
                            <h1 className="text-[13px] text-yellow-500 font-semibold">COATING INFO</h1>
                        )}
                        {currentText === 'FULL BODY' && (
                            <h1 className="text-[13px] text-yellow-500 font-semibold">COATING INFO</h1>
                        )}
                        {currentText === 'FORT KNOX' && (
                            <h1 className="text-[13px] text-yellow-500 font-semibold">COATING INFO</h1>
                        )}
                        <div>
                            <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                {currentText === 'FULL FRONT' && (
                                    <>
                                        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">1-YEAR</h2>

                                        <ListTintPages  text={text1}/>
                                    </>
                                )}
                                {currentText === 'TRACK PACK' && (
                                    <>
                                        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">4-YEAR</h2>

                                        <ListTintPages  text={text2}/>
                                    </>
                                )}
                                {currentText === 'FULL BODY' && (

                                    <>
                                        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">4-YEAR</h2>

                                        <ListTintPages  text={text3}/>
                                    </>
                                )}
                                {currentText === 'FORT KNOX' && (
                                    <>
                                        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">8-YEAR</h2>
                                        <ListTintPages  text={text4}/>

                                    </>
                                )}
                            </ul>

                        </div>

                    </div>

                </div>

                <div>
                </div>
            </div>
            <div className="pb-10 container">
                {currentText === 'FULL FRONT' && (
                    <p>Welcome to the pinnacle of vehicle protection with our Full Front Package. Designed for those who demand comprehensive, state-of-the-art protection for their vehicle’s most vulnerable areas, this package is a high-quality solution that ensures your vehicle stays pristine, regardless of the road conditions. The Full Front Package meticulously covers the full front bumper, headlights, fog lights, full hood, full front fenders, and mirror caps. Our paint protection film seamlessly merges with your vehicle, preserving its aesthetic appeal while guarding against road debris, scratches, and the harsh effects of weather. Choose our Full Front Package today and feel confident knowing your vehicle’s front-end is protected by the best.</p>

                )}
                {currentText === 'TRACK PACK' && (
                    <p>Drive with peace of mind with our Track Pack paint protection package. This offering is specifically crafted for high-performance car enthusiasts and those who appreciate an extra layer of defense for their vehicle. By adding to the comprehensive protection offered in our Full Front Package, the Track Pack extends coverage to the A-pillars, rocker panels, and quarter panels, areas that typically suffer the most during high-speed driving or off-roading. Our professionally installed paint protection film offers unparalleled resistance against chips, scratches, and stains, ensuring your vehicle remains in top-notch condition even under rigorous driving conditions. Embrace the thrill of the ride knowing your vehicle is shielded by our Track Pack.</p>

                )}
                {currentText === 'FULL BODY' && (
                    <p>
                        Indulge in our most luxurious, all-encompassing protective offering with the Full Body Package. This top-tier solution ensures complete protection for every inch of your vehicle, safeguarding it from everyday wear and tear, environmental factors, and unexpected road debris. Offering full coverage, this package envelops your vehicle in a virtually invisible shield, maintaining its pristine appearance and resplendent shine. Our high-quality paint protection film, professionally installed, guards against damage, ensuring the longevity of your vehicle’s appearance and resale value. With our Full Body Package, you’re investing in not just comprehensive protection, but also peace of mind, knowing your entire vehicle is protected. Trust in our Full Body Package for the ultimate protection solution.
                    </p>
                )}
                {currentText === 'FORT KNOX' && (
                    <p>
                        Full body Xpel Ultimate plus 10 mil film, topped with Xpel Fusion Premium 8 year ceramic coating. You’d have better luck getting into Fort Knox, than into this paint. Say goodbye to rock chips, scratches, swirl marks, etchings, water spots and more with the strongest package of all time.</p>
                )}
            </div>

        </div>
    );
}