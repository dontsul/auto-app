"use client";
import { useState } from 'react';
import { Title } from '@/components/title/Title';

export function WindowTintPages() {
    // State variables to hold the current text and image information
    const [currentText, setCurrentText] = useState('PRIME CS');
    const [currentImage, setCurrentImage] = useState('path-to-prime-cs-image');

    const handleButtonClick = (text: string, image: string) => {
        setCurrentText(text);
        setCurrentImage(image);
    };

    return (
        <div>
            <Title tag="h2" cn="mt-24 sm:mt-[6px] md:mt-[112px] lg:mt-[198px] mb-14">
                Window <span className="text-yellow-500">Tinting</span>
            </Title>

            <div className="flex justify-center">
                <div className="flex flex-col rounded-md shadow-sm" role="group">
                    <button
                        type="button"
                        className={`px-10 py-2 text-sm font-medium ${
                            currentText === 'PRIME CS' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                        }`}
                        onClick={() => handleButtonClick('PRIME CS', 'path-to-prime-cs-image')}
                    >
                        PRIME CS
                    </button>
                    <button
                        type="button"
                        className={`px-10 py-2 text-sm font-medium ${
                            currentText === 'PRIME XR' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                        }`}
                        onClick={() => handleButtonClick('PRIME XR', 'path-to-prime-xr-image')}
                    >
                        PRIME XR
                    </button>
                </div>
                <div>
                    <h3>{currentText}</h3>
                    <img src={currentImage} alt={currentText} />
                </div>
            </div>


        </div>
    );
}
