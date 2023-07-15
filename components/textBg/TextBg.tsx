import React from 'react';

interface AboutBgProps {
    text: string;
}

export function TextBg({text}: AboutBgProps) {
    return (
        <div className="  sticky top-50 h-screen inset-1 flex items-center justify-center">
            <h1 className="  flex text-[80px] md:text-[100px] lg:text-[210px] text-center  opacity-30 font-bold bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
                {text}
            </h1>
        </div>
    );
}
