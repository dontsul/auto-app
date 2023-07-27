import React, {useState} from "react";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";
import {WindowTintCar} from "@/components/ourServices/windowTintPages/WindowTintCar";
import {motion} from "framer-motion";
import Image from "next/image";
import imagesTest from "@/public/CARBON-Car.webp";
import {WindowTintTruck} from "@/components/ourServices/windowTintPages/WindowTintTruck";
import {WindowTintSUV} from "@/components/ourServices/windowTintPages/WindowTintSUV";
import {WindowTintFront} from "@/components/ourServices/windowTintPages/WindowTintFront";
import {WindowTintWindshield} from "@/components/ourServices/windowTintPages/WindowTintWindshield";

export function WindowTintItem (){

    const [currentText, setCurrentText] = useState('CS');
    const [currentImage, setCurrentImage] = useState('path-to-prime-cs-image');

    const handleButtonClick = (text: string, image: string) => {
        setCurrentText(text);
        setCurrentImage(image);
    };

    return(
        <div >
            <div className="flex ">
                <button
                    type="button"
                    className={`w-full py-2 text-sm font-medium ${
                        currentText === 'CS' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                    }`}
                    onClick={() => handleButtonClick('CS', 'path-to-prime-cs-image.jpg')}
                >
                    Car
                </button>
                <button
                    type="button"
                    className={`w-full py-2 text-sm font-medium ${
                        currentText === 'XR' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                    }`}
                    onClick={() => handleButtonClick('XR', 'path-to-prime-xr-image.jpg')}
                >
                    Truck
                </button>
                <button
                    type="button"
                    className={`w-full py-2 text-sm font-medium ${
                        currentText === 'SD' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                    }`}
                    onClick={() => handleButtonClick('SD', 'path-to-prime-xr-image.jpg')}
                >
                    SUV
                </button>
                <button
                    type="button"
                    className={`w-full py-2 text-sm font-medium ${
                        currentText === 'CSS' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                    }`}
                    onClick={() => handleButtonClick('CSS', 'path-to-prime-cs-image.jpg')}
                >
                    2 Front
                </button>
                <button
                    type="button"
                    className={`w-full py-2 text-sm font-medium ${
                        currentText === 'XRR' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                    }`}
                    onClick={() => handleButtonClick('XRR', 'path-to-prime-xr-image.jpg')}
                >
                    Windshield
                </button>
            </div>

            <div>
                {currentText === 'CS' && (
                    <WindowTintCar/>
                )}
                {currentText === 'XR' && (
                    <WindowTintTruck/>
                )}
                {currentText === 'SD' && (
                    <WindowTintSUV/>
                )}
                {currentText === 'CSS' && (
                    <WindowTintFront/>
                )}
                {currentText === 'XRR' && (
                    <WindowTintWindshield/>
                )}
            </div>
        </div>

    );
}