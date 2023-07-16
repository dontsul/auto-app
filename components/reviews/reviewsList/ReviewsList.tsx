"use client";

import { ItemRewiews } from "../itemRewiews/ItemRewiews";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    position: 1,
    rating: 4,
    text: "One of my fav hangout in city walk. This cozy Italian spot is must visit if you are with your family or friends. They have great Italian menu. We ordered their Piazza17 special pizza & margarita pizza both were super delicious & also tried their fresh fruits ice cream.\nStaffs are attentive & quick. Great ambience ! We highly recommend this place",
    reviewedAt: "2022-06-10 14:14:28 +00:00",
    profileName: "Sakina M",
  },
  {
    position: 2,
    rating: 5,
    text: "We had a perfect dine with a perfect view! 👌\nTried their Piazza Pizza and Mini Pancakes . And totally in love with their food 🤤 if you’re a pancake lover , then these pancakes are a must try . The ambience , the view and the everything was equally worth . 👌",
    reviewedAt: "2022-06-10 14:14:28 +00:00",
    profileName: "Arifa Abbas",
  },
  {
    position: 3,
    rating: 5,
    text: "Feels like Italy has travelled to Dubai on the Food Truck!I was strolling in city walk Dubai & saw PIAZZA 17, Thought of trying the Pizza's, chicken Nuggets & Coffee from there. That day was valentine's day - They have made heart shape pizza for me & my loved ones - Was really good & attractive. Do visit & try the Pasta, Pizza, Truffles & Coffee.",
    reviewedAt: "2022-06-10 14:14:28 +00:00",
    profileName: "Dimple Mehbubani",
  },
  {
    position: 4,
    rating: 4,
    text: "Dine with Burj Khalifa View @piazza17\nThis super cute food truck is located at City walk and they serve pizzas, lasagne, gelatos, hot & cold drinks. Also, enjoy the Burj view while you eat. I ordered👇🏻\nMargarita Pizza: Believe me, the best margarita I had in Dubai. Right amount of tomato sauce, basil, cheese & base cooked to perfection. A must try 👅\n🥤Blue Lagoon Mojito: This was such a refreshing drink & exactly how I like it. So so good.\nHot Chocolate: Creamy, rich & yummy hot chocolate topped with whipped cream. Wish it’s bit sweet.\nEverything is priced reasonably and the staff are polite & sweet. Also Free parking available right behind their food truck.",
    reviewedAt: "2022-06-10 14:14:28 +00:00",
    profileName: "Sana MohammedAli",
  },
  {
    position: 5,
    rating: 5,
    text: "Weather was great so went for a walk at city walk and stopped at Piazza 17 food truck. Was impressed by the extensive menu and great taste of the food. Even the presentation was cute with the roses. Tried the Diavola pizza and lemon iced tea and lemon gelato and all where very tasty and seating outsode was cute. Service was very fast also.",
    reviewedAt: "2022-06-10 14:14:28 +00:00",
    profileName: "Norah Saud",
  },
  {
    position: 17,
    rating: 5,
    text: "I visit first time I was not aware that they have amazing pizza in town ... I tried they chicken pizza and mango gelato which was outstanding .... Love the view and outdoor dining area with nice music and service ☺️",
    reviewedAt: "2022-06-10 14:14:26 +00:00",
    profileName: "Bint_hindi",
  },
  {
    position: 18,
    rating: 5,
    text: "I loved this place!\nThe only down thing is that it’s too hot outside still. But once the weather in Dubai gets better, this is the place to be! 😍\nSuper cute display for our iced tea. The Diavola pizza was amazing. (Quite spicy) I love spicy but for the ones who don’t, be aware.\nLet’s not talk about the mozzarella truffle bites. WOW 😍 I looooved it!! Tried the coconut gelato as well and we all were speechless.\nWe went quite late, around 11pm we were there. It was such a nice vibe and the music. First we heard nice early 2000s songs, then some nice afro jam and then the bachata playlist came on. 😄 other people started to come around midnight and I started to teach my friend some bachata moves.\nIt was just an amazing overall experience. Will definitely come back once the weather cools down!",
    reviewedAt: "2022-06-10 14:14:26 +00:00",
    profileName: "Marion Sundquist",
  },
  {
    position: 19,
    rating: 5,
    text: "Loved this restaurant! The location of the food truck is amazing, just in the heart of City Walk, direct view of Burj Khalifa.. great place to sit outdoor. The food is delicious! I loved the pizza, and I tries 4 different slices .. all of the were yummy!\nThe truffle fries is a must try!\nKeep it up Piazza17!",
    reviewedAt: "2022-06-10 14:14:26 +00:00",
    profileName: "Elias El Sous",
  },
  {
    position: 20,
    rating: 5,
    text: "Such a cute little truck serving some of the best pizzas I’ve had! So flavourful and done just right. The price is pretty reasonable for the size of the pizzas. Highly recommend the Diavola if you like slightly spicy! Also the service was quick and the location is perfect. Really enjoyed today’s fun trip to jumeriah beach where the truck is parked these days!",
    reviewedAt: "2022-06-10 14:14:26 +00:00",
    profileName: "Meenal Khan",
  },
];

export const ReviewsList = () => {
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
      className="py-4 z-30"
    >
      <Slider className="py-6" {...settings}>
        {reviews.map((rev) => (
          <ItemRewiews rev={rev} key={rev.position} />
        ))}
      </Slider>
    </motion.div>
  );
};
