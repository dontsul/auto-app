
import React from "react";
import ElevatingText from "@/components/title/ElevatingText";
import Link from "next/link";

export function TextAbout (){
    return (
        <div className=" z-10 p-5 flex order-2 lg:order-1   items-center justify-center px-10 md:px-10  transition-transform duration-300">
            <div className="text-center relative z-20">
                <ElevatingText mainText={"Elevating Vehicles For  "} subText={"Max Performance"} />
                <p className="leading-9 py-7 text-[16px] text-center mb-2  rounded-full " style={{color: '#616161',display: 'inline-block', width: '100%', textAlign: 'center' }}>

                    Welcome to <strong>Capital Upfitters</strong>, the family-owned epicenter of top-tier auto customization,
                    vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry,
                    we proudly deliver unparalleled fleet customization services and robust protection coatings
                    to a diverse range of clients, from municipal to retail sectors.
                    Our reputation as a trailblazer stems from our continuous commitment
                    to superior craftsmanship, delivering innovative auto customization
                    and performance solutions that truly redefine automotive excellence.
                </p>

                <Link href={`/about`}>
                    <button className="w-fit font-bold rounded-none border-[1px] border-[#000] px-6 py-3 text-sm transition duration-300 ease-in-out hover:bg-black hover:text-white mt-4">
                        View More
                    </button>
                </Link>
            </div>
        </div>
    );
}