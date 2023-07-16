import React from "react";
import CustomComponentText from "@/components/customComponentText/CustomComponentText";

export function ContactUsText() {
  return (
    <div className="z-10 p-5 flex order-2 lg:order-1  px-10 md:px-10">
      <div className=" relative z-20">
        <CustomComponentText
          paragraph1={
            "When it comes to aftermarket accessories for your truck or SUV there is no better place to do it than Elevated Motoring. Our team has all the experience and knowledge to get you the best look within your budget at the service that you would expect."
          }
          paragraph2={
            "The first step is getting your request to our team so we can understand how you use your truck or SUV and determine the best accessory options for your vehicle. This will help us provide a comprehensive estimate for you based on what you are wanting to accomplish with your vehicle. Please fill out the form here with any details or requirements that you may have and we will get in touch with you right away with any further questions and your free estimate."
          }
        />
      </div>
    </div>
  );
}
