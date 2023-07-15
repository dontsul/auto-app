'use client';
import React from "react";
import {Build} from "@/components/aboutSection/Build";
import {TextAbout} from "@/components/aboutSection/TextAbout";
import ElevatingText from "@/components/title/ElevatingText";
import Image from "next/image";
import images from "@/public/2.png";

export function AboutSection (){
        return (
            <div className=" container ">
                <ElevatingText mainText={"Elevating Vehicles For  "} subText={"Max Performance"} />
                <div className="grid grid-cols-1 order-1 lg:order-2 lg:grid-cols-2  ">
                    <div className=" container brightness-75 order-1 lg:order-2  ">
                        <Image
                            className="rounded-2xl lg:rounded-2xl  brightness-75"
                            width={500}
                            height={500}
                            src={images}
                            alt="bg"
                        />
                    </div>
                    <TextAbout />
                </div>
                <Build />

            </div>
        );
    }