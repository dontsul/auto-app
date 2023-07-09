
import React from "react";

export function TextAbout (){
    return (
        <div className=" z-10 p-10 col-span-12 flex md:col-span-5  items-center justify-center px-10 md:px-10 hover:scale-105 transition-transform duration-300">
            <h3 className="text-center relative z-20">
                <span className="text-1xl font-semibold md:my-3 md:text-4xl md:leading-[50px]" style={{ color: 'black' }}>Elevating Vehicles For </span>
                <span className="text-1xl font-semibold md:my-3 md:text-4xl md:leading-[50px]" style={{ color: '#ac9b79' }}>Max Performance</span>
                <span className=" p-10 text-[16px] text-center mb-2 h-1 w-5 rounded-full " style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                            At Elevated Motoring,
                            we are dedicated to providing
                            high-quality service for your
                            vehicle needs. With 35+ years
                            of combined experience in the
                            automotive industry, our knowledgeable
                            staff can assist you with OEM and aftermarket
                            solutions tailored to your vehicle’s requirements.
                            Trust us to deliver exceptional results and elevate
                            your driving experience.
                        </span>
                <button className="w-fit rounded-none border-[1px] border-[#000] px-6 py-3 text-sm font-thin transition duration-300 ease-in-out hover:bg-black hover:text-white mt-4">View More</button>

            </h3>
        </div>

    );
}