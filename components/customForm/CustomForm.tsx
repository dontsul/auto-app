"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { motion } from "framer-motion";

import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { CustomTextArea } from "../customTextArea/CustomTextArea";
import { CustomSelect } from "../customSelect/CustomSelect";

import metadata from "libphonenumber-js/metadata.min.json";

const contactMeVariants = [
  {
    value: "contactMe",
    text: "Select an option",
    disabled: true,
    selected: true,
  },
  { value: "callMe", text: "Call Me" },
  { value: "emailMe", text: "Email Me" },
  { value: "smsMe", text: "SMS Me" },
];

const schema = yup
  .object({
    name: yup.string().required("Name is a required field"),
    phone: yup.string().required("phone is a required field"),
    email: yup.string().email().required("Email is a required field"),
    contactMe: yup.string().required("Contact Me is a required field"),
    comment: yup.string().required("Comments is a required field"),
  })
  .required();

export const CustomForm = () => {
  const formLeftAnimation = {
    hidden: {
      x: -300,
      opacity: 0,
    },
    visible: (custom: any) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.4,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };
  const formRightAnimation = {
    hidden: {
      x: 300,
      opacity: 0,
    },
    visible: (custom: any) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.4,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      contactMe: "",
      comment: "",
    },
  });
  const onSubmit = handleSubmit((data: any) => console.log(data));

  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      onSubmit={onSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
      viewport={{ once: true }}
    >
      <motion.div
        viewport={{ once: true }}
        custom={0}
        variants={formLeftAnimation}
        className="mb-4 "
      >
        <label className="text-sm">
          Name
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Write your name" />
            )}
          />
        </label>
        <p className="text-sm text-red-600">{errors.name?.message}</p>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        className="mb-4 "
        custom={1}
        variants={formRightAnimation}
      >
        <label className="text-sm">
          Phone
          <PhoneInputWithCountry
            className=" bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:ring-black focus:border-black block w-full p-2.5"
            control={control}
            rules={{ required: true, validate: isPossiblePhoneNumber }}
            defaultCountry="US"
            autoComplete="tel"
            displayInitialValueAsLocalNumber
            defaultValue=""
            international
            withCountryCallingCode
            name="phone"
            metadata={metadata}
          />
        </label>
        <p className="text-sm text-red-600">{errors.phone?.message}</p>
      </motion.div>

      <motion.div
        viewport={{ once: true }}
        className="mb-4 "
        custom={2}
        variants={formLeftAnimation}
      >
        <label className="text-sm">
          Email
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Write your email" />
            )}
          />
        </label>
        <p className="text-sm text-red-600">{errors.email?.message}</p>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        className="mb-4  block"
        custom={3}
        variants={formRightAnimation}
      >
        <label className="text-sm">
          Contact Me
          <Controller
            name="contactMe"
            control={control}
            render={({ field }) => (
              <CustomSelect contactMeVariants={contactMeVariants} {...field} />
            )}
          />
        </label>
        <p className="text-sm text-red-600">{errors.contactMe?.message}</p>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        className="mb-4 col-span-1 md:col-span-2"
        custom={4}
        variants={formLeftAnimation}
      >
        <label className="text-sm">
          Comment
          <Controller
            name="comment"
            control={control}
            render={({ field }) => (
              <CustomTextArea {...field} placeholder="Write your comment" />
            )}
          />
        </label>
        <p className="text-sm text-red-600">{errors.comment?.message}</p>
      </motion.div>

      <motion.div
        viewport={{ once: true }}
        custom={5}
        variants={formRightAnimation}
        className="flex items-center justify-center mb-4 col-span1 md:col-span-2"
      >
        <Button
          type="submit"
          handleClick={() => {}}
          cn="w-full"
          outline={false}
        >
          Submit
        </Button>
      </motion.div>
    </motion.form>
  );
};
