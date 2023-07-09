import React from "react";

export function Brands () {
    return(
        <div className="z-10 relative bg-white">
            <div className="p-10 col-span-12 flex md:col-span-5 items-center justify-center px-10 md:px-10">
                <h3 className="text-center">
                    <span className="text-1xl font-semibold md:my-3 md:text-4xl md:leading-[50px]" style={{ color: 'black' }}>
                        Elevating Vehicles For
                    </span>
                    <span className="text-1xl font-semibold md:my-3 md:text-4xl md:leading-[50px]" style={{ color: '#ac9b79' }}>
                        Max Performance
                    </span>
                </h3>
            </div>
            <div className="p-4 col-span-12 flex md:col-span-5 items-center justify-center px-4 md:px-10">
                <button className="w-72 font-bold justify-center py-3 text-sm border bg-black text-white border-black hover:bg-white hover:text-black">
                    SELECT YOUR VEHICLE
                </button>
            </div>
        </div>



    );
}