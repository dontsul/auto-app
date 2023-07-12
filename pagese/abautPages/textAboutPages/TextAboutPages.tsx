import ElevatingText from "@/components/title/ElevatingText";
import React from "react";

export function TextAboutPages() {
    return(

            <div className=" z-10 p-5 flex order-2 lg:order-1   items-center justify-center px-10 md:px-10  transition-transform duration-300">

                <div className="text-center relative z-20">
                    <h3 className="text-center relative z-20">
                        <ElevatingText mainText={"Elevating Vehicles For  "} subText={"Max Performance"} />

                    </h3>
                    <p className="leading-9 py-7 text-[16px]  mb-2  " style={{ color: '#616161',display: 'inline-block', width: '100%', textAlign: 'center' }}>
                        Welcome to <strong>Capital Upfitters</strong>, the family-owned epicenter of top-tier auto customization,
                        vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry,
                        we proudly deliver unparalleled fleet customization services and robust protection coatings
                        to a diverse range of clients, from municipal to retail sectors.
                        Our reputation as a trailblazer stems from our continuous commitment
                        to superior craftsmanship, delivering innovative auto customization
                        and performance solutions that truly redefine automotive excellence.
                    </p>
                    <p className="leading-9 py-7 text-[16px] text-center mb-2  rounded-full " style={{ color: '#616161', display: 'inline-block', width: '100%', textAlign: 'center' }}>
                        We&apos;re not just about personal vehicles, our commitment to deliver exceptional
                        service spans across government, commercial, and residential projects. Every vehicle
                        that rolls into our shop receives the same degree of attention and commitment to quality.

                        For additional information about our services at Capital Upfitters or
                        to discuss your specific customization and performance enhancement needs,

                        we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for
                        an automotive experience that goes beyond service to deliver a transformation, redefining your ride.
                    </p>
                </div>

            </div>

    );
}