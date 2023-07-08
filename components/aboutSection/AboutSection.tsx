import React from "react";
import {motion} from "framer-motion";

export function AboutSection (){

    return(
        <div className="grid grid-cols-12 md:col-span-3 gap-3">
            <div className="col-span-12 flex md:col-span-6 flex-col items-center justify-center px-5 md:px-10">
                <h3 className="text-center">
                    <span className=" text-1xl font-semibold md:my-3 md:text-4xl md:leading-[100px]" style={{ color: 'black' }}>Elevating Vehicles For </span>
                    <span className=" text-1xl font-semibold md:my-3 md:text-4xl md:leading-[100px]" style={{ color: '#ac9b79' }}>Max Performance</span>
                    <span className="text-center mb-2 h-1 w-5 rounded-full bg-white" style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
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
                </h3>
                <button className="w-fit rounded-none border-[1px] border-[#000] px-6 py-3 text-sm font-thin transition duration-300 ease-in-out hover:bg-black hover:text-white mt-4">View More</button>
            </div>
            <div className="col-span-12 flex justify-center">
                <img
                    style={{ width: 100, height: 100 }}
                    src={"2.png"}
                    alt="Image"
                    className="rounded-2xl object-cover brightness-75"
                />
            </div>
        </div>


    );
}