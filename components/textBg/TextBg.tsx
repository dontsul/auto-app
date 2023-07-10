import React from 'react';

interface AboutBgProps {
    text: string;
}

export function TextBg({ text }: AboutBgProps) {
    return (
        <div className="fixed  inset-1 flex items-center justify-center">
            <div className="h-screen">
                <h1 className="relative flex text-[80px] md:text-[110px] lg:text-[250px] text-center  opacity-50 font-bold bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
                        {text}

                </h1>
            </div>
        </div>
    );
}
