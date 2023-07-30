"use client";
import { FC } from "react";
import { ItemRewiews } from "../itemRewiews/ItemRewiews";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface IReview {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
}

interface IReviewsListProps {
  reviews: IReview[];
}

export const ReviewsList: FC<IReviewsListProps> = ({ reviews }) => {
  console.log(reviews);

  const reviewsListAnimation = {
    hidden: {
      x: -100,
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
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 4,
    speed: 500,
    dots: true,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={reviewsListAnimation}
      viewport={{ once: true }}
      className="py-4 z-30 sm:px-8 lg:px-0"
    >
      <Slider className="py-6" {...settings}>
        {reviews !== undefined
          ? reviews.map((review) => (
              <ItemRewiews review={review} key={uuidv4()} />
            ))
          : null}
      </Slider>
    </motion.div>
  );
};
