import React from "react";
import Image from "next/image";
import images from "../../public/2.png"
export function ImagesAbout (){
    return(
        <div className=" container brightness-75 order-1 lg:order-2  justify-center relative">
                <Image
                    className="rounded-2xl lg:rounded-2xl  brightness-75"
                    width={500}
                    height={500}
                    src={images}
                    alt="bg"
                />
        </div>


    );
}