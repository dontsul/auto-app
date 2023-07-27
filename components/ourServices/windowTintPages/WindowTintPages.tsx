"use client";
import React, { useState } from 'react';
import { Title } from '@/components/title/Title';
import imagesTest from "@/public/CARBON-Car.webp";
import imagesTest2 from "@/public/Ceramic-Windshield.webp";
import imagesTest3 from "@/public/CERAMIC-Plus-Car.webp"
import {CustomForm} from "@/components/customForm/CustomForm";
import Image from "next/image";

import {motion} from "framer-motion";
import {Reviews} from "@/components/reviews/Reviews";
import {ListTintPages} from "@/components/ourServices/windowTintPages/ListTintPages";
export const text1 = ["UV Protection","Improved Privacy","Reduced Glare","Added Style" ];
export const text2 = ["70% Heat Rejection","UV Protection","Improved Privacy","Reduced Glare"," Improved Comfort","Added Style" ];
export const text3 = ["96% Heat Rejection","UV Protection","Improved Privacy","Reduced Glare","Non-Metallized","Nano-Ceramic","Added Style" ];

export function WindowTintPages() {
    const [currentText, setCurrentText] = useState('PRIME CS');
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
        <div className="container">
            <Title tag="h2" cn="mt-24 sm:mt-[6px] md:mt-[20px] lg:mt-[28px] mb-14">
                Window <span className="text-yellow-500">Tinting</span>
            </Title>
            <div className=" pb-20 grid lg:grid-cols-[140px_auto_240px] gap-12  justify-center">

                <div className=" m-5 rounded-md " role="group">
                    <button
                        type="button"
                        className={`w-full py-5 text-sm font-medium ${
                            currentText === 'PRIME CS' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                        }`}
                        onClick={() => handleButtonClick('PRIME CS', 'path-to-prime-cs-image.jpg')}
                    >
                        CERAMIC
                    </button>
                    <button
                        type="button"
                        className={`w-full py-5 text-sm font-medium ${
                            currentText === 'PRIME XR' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                        }`}
                        onClick={() => handleButtonClick('PRIME XR', 'path-to-prime-xr-image.jpg')}
                    >
                        CERAMIC
                    </button>
                    <button
                        type="button"
                        className={`w-full py-5 text-sm font-medium ${
                            currentText === 'PRIME SD' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                        }`}
                        onClick={() => handleButtonClick('PRIME SD', 'path-to-prime-xr-image.jpg')}
                    >
                        CERAMIC
                    </button>

                </div>


                <div className="flex ">
                    {currentText === 'PRIME CS' && (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={imageAbout}
                            viewport={{ once: true }}
                            className=" flex justify-center brightness-75 order-1 lg:order-2 max-w-full"
                        >
                            <Image
                                className="rounded-2xl lg:rounded-2xl  brightness-75 max-w-full"
                                width={500}
                                height={500}
                                src={imagesTest}
                                alt="bg"
                            />
                        </motion.div>
                    )}
                    {currentText === 'PRIME XR' && (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={imageAbout}
                            viewport={{ once: true }}
                            className=" flex justify-center brightness-75 order-1 lg:order-2"
                        >
                            <Image
                                className="rounded-2xl lg:rounded-2xl  brightness-75"
                                width={500}
                                height={500}
                                src={imagesTest2}
                                alt="bg"
                            />
                        </motion.div>
                    )}
                    {currentText ==='PRIME SD' && (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={imageAbout}
                            viewport={{ once: true }}
                            className=" flex justify-center brightness-75 order-1 lg:order-2"
                        >
                            <Image
                                className="rounded-2xl lg:rounded-2xl  brightness-75"
                                width={500}
                                height={500}
                                src={imagesTest3}
                                alt="bg"
                            />
                        </motion.div>
                    )}

                </div>
                <div className="flex justify-between ">
                    <div className="flex flex-col">
                        {currentText === 'PRIME CS' && (
                            <h1 className="text-[60px] text-red-500 font-bold">250$</h1>
                        )}
                        {currentText === 'PRIME XR' && (
                            <h1 className="text-[60px] text-red-500 font-bold">350$</h1>
                        )}
                        {currentText === 'PRIME SD' && (
                            <h1 className="text-[60px] text-red-500 font-bold">450$</h1>
                        )}
                        <div>
                            <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                {currentText === 'PRIME CS' && (
                                    <>
                                        <ListTintPages text={text1}/>
                                    </>
                                )}
                                {currentText === 'PRIME XR' && (
                                    <>
                                        <ListTintPages text={text2}/>
                                    </>
                                )}
                                {currentText === 'PRIME SD' && (
                                    <>
                                        <ListTintPages text={text3}/>
                                    </>
                                )}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-20">
                <Title tag="h4" cn="mb-10">
                    Contact us
                </Title>
                <CustomForm />
                <Reviews />
            </div>

        </div>
    );
}

