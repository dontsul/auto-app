"use client";
import { useState } from 'react';
import { Title } from '@/components/title/Title';
import images from "@/public/CARBON-Car.webp";
import images2 from "@/public/Ceramic-Windshield.webp";

import Image from "next/image";
import {CustomForm} from "@/components/customForm/CustomForm";

export function WindowTintPages() {
    // State variables to hold the current text and image information
    const [currentText, setCurrentText] = useState('PRIME CS');
    const [currentImage, setCurrentImage] = useState('path-to-prime-cs-image');

    const handleButtonClick = (text: string, image: string) => {
        setCurrentText(text);
        setCurrentImage(image);
    };

    return (
        <div className="container ">
            <Title tag="h2" cn="mt-24 sm:mt-[6px] md:mt-[112px] lg:mt-[198px] mb-14">
                Window <span className="text-yellow-500">Tinting</span>
            </Title>

            <div className="  grid grid-cols-[100px_auto_140px] gap-3 ">
                <div className=" rounded-md shadow-sm" role="group">
                    <button
                        type="button"
                        className={`px-10 py-8 text-sm font-medium ${
                            currentText === 'PRIME CS' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                        }`}
                        onClick={() => handleButtonClick('PRIME CS', 'path-to-prime-cs-image.jpg')}
                    >
                        PRIME CS
                    </button>
                    <button
                        type="button"
                        className={`px-10 py-10 text-sm font-medium ${
                            currentText === 'PRIME XR' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                        }`}
                        onClick={() => handleButtonClick('PRIME XR', 'path-to-prime-xr-image.jpg')}
                    >
                        PRIME XR
                    </button>

                </div>

                <div className="flex justify-between ">
                    {currentText === 'PRIME CS' && (
                        <Image
                            className="rounded-2xl lg:rounded-2xl  brightness-90"
                            width={500}
                            height={500}
                            src={images2}
                            alt="bg"
                        />
                    )}
                    {currentText === 'PRIME XR' && (
                        <Image
                            className="rounded-2xl lg:rounded-2xl  brightness-75"
                            width={500}
                            height={500}
                            src={images2}
                            alt="bg"
                        />
                    )}
                    <div className="flex flex-col ">
                        {currentText === 'PRIME CS' && (
                            <h3 className="text-red-500 font-bold">250$</h3>
                        )}
                        {currentText === 'PRIME XR' && (
                            <h3 className="text-red-500 font-bold">450$</h3>
                        )}
                        <div>
                            <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                {currentText === 'PRIME CS' && (
                                    <>
                                        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">CARBON</h2>
                                        <li className="flex items-center">
                                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            UV Protection
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            Improved Privacy
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            Reduced Glare
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            Added Style
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3.5 h-3.5 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            Added Style
                                        </li>
                                    </>
                                )}
                                {currentText === 'PRIME XR' && (
                                    <>
                                        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">CERAMIC</h2>
                                        <li className="flex items-center">
                                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            70% Heat Rejection
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            UV Protection
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            Improved Privacy
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            Reduced Glare
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            Improved Comfort
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            Added Style
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3.5 h-3.5 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            Added Style
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <CustomForm />
        </div>
    );
}

