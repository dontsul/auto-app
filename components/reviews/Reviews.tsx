'use client';
import { ReviewsList } from './reviewsList/ReviewsList';
import {TextBg} from "@/components/textBg/TextBg";
import React, {useEffect, useState} from "react";
import ElevatingText from "@/components/title/ElevatingText";

export const Reviews = () => {

  return (
    <section className="container text-center">

        <ElevatingText key="brands" mainText={"Our Past  "} subText={"Clients"} />
        <ReviewsList />
    </section>
  );
};
