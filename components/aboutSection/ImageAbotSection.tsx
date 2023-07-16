"use client";

import Image from "next/image";
import images from "@/public/2.png";
import { motion } from "framer-motion";

export const ImageAboutSection = () => {
  const imageAbout = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={imageAbout}
      viewport={{ once: true }}
      className=" flex justify-center brightness-75 order-1 lg:order-2"
    >
      <Image
        className="rounded-2xl lg:rounded-2xl  brightness-75"
        width={500}
        height={500}
        src={images}
        alt="bg"
      />
    </motion.div>
  );
};
