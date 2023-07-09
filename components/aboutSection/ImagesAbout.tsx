import React from "react";

export function ImagesAbout (){
    return(
        <div className="col-span-5 p-10 flex justify-center hover:scale-103 transition-transform duration-200">
            <img className=" absolute rounded-2xl object-cover brightness-75  w-96 h-96 top-20% right-32%"
                 style={{ width: 600, height: 600  }}
                 src={"EM-BG.png"}
                 alt="imgs"/>
            <img
                style={{ width: 500, height: 500 }}
                src={"2.png"}
                alt="Image"
                className="rounded-2xl object-cover brightness-75  w-96 h-96"
            />

        </div>
    );
}