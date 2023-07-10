import React from "react";
import Image from "next/image";
import imagesE from "../../public/EM-BG.png"
import images from "../../public/2.png"
export function ImagesAbout (){
    return(
        <div className=" order-1 lg:order-2 p-10 flex justify-center hover:scale-103 transition-transform duration-200">
            <Image
                width={500}
                height={500}
                src={imagesE}
                alt="auto"
                className="rounded-2xl object-cover brightness-75  w-90 h-79"
            />
            <Image className="absolute rounded-2xl object-cover brightness-75  w-96 h-96 "
                   width={500}
                   height={500}
                   src={images}
                   alt="bg"/>


        </div>
    );
}