
import React from "react";
import ElevatingText from "@/components/title/ElevatingText";

export function TextAbout (){
    return (
        <div className=" z-10 p-5 flex order-2 lg:order-1   items-center justify-center px-10 md:px-10  transition-transform duration-300">
            <h3 className="text-center relative z-20">
                <ElevatingText mainText={"Elevating Vehicles For  "} subText={"Max Performance"} />
                <span className=" p-7 text-[16px] text-center mb-2 h-1 w-5 rounded-full " style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
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
                <button className="w-fit font-bold rounded-none border-[1px] border-[#000] px-6 py-3 text-sm  transition duration-300 ease-in-out hover:bg-black hover:text-white mt-4">View More</button>

            </h3>
        </div>

    );
}