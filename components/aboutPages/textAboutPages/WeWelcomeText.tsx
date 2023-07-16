import React from "react";

export function WeWelcomeText() {
  return (
    <div className="  p-5 flex order-2 lg:order-1 justify-center px-10 md:px-10  transition-transform duration-300">
      <div className=" relative ">
        <p
          className="leading-5 py-7 text-[16px]  mb-2  "
          style={{ color: "#616161", display: "inline-block", width: "100%" }}
        >
          When it comes to accessorizing your vehicle there is no better place
          to do it than Elevated Motoring. Our team has all the experience and
          knowledge to get you the best look within your budget at the service
          that you would expect. Our team is dedicated to providing you with the
          best experience when modifying your Car, Truck or SUV.
        </p>
        <p
          className="leading-5 py-7 text-[16px]  mb-2  rounded-full "
          style={{ color: "#616161", display: "inline-block", width: "100%" }}
        >
          The first step is getting your request to our team so we can
          understand how you use your car, truck or SUV to determine the options
          for your vehicle. This will help us provide a comprehensive estimate
          for you based on how you intend on using the vehicle. Please fill out
          the form here and we will get in touch with you right away with any
          further questions and your free estimate
        </p>
      </div>
    </div>
  );
}
