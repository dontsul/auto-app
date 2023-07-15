"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

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
      contactMe: "select an option",
      comment: "",
    },
  });
  const onSubmit = handleSubmit((data: any) => console.log(data));

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="mb-4 col-span-1">
        <label>
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
      </div>
      <div className="mb-4 col-span-1">
        <label>
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
      </div>

      <div className="mb-4 col-span-1">
        <label>
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
      </div>
      <div className="mb-4 col-span-1">
        <label>
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
      </div>
      <div className="mb-4 col-span-1 lg:col-span-2 row-span-4">
        <label>
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
      </div>

      <div className="flex items-center justify-center mb-4 col-span-2">
        <Button
          type="submit"
          handleClick={() => {}}
          cn="w-full col-span-2"
          outline={false}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
