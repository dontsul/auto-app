'use client';
import {ReviewsList} from './reviewsList/ReviewsList';
import React from "react";
import ElevatingText from "@/components/title/ElevatingText";

export const Reviews = () => {


    return (
        <section className="container text-center">

            <ElevatingText key="brands" mainText={"Our Past  "} subText={"Clients"}/>
            <ReviewsList/>
        </section>
    );
};
