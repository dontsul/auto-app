"use client";

import { useEffect, useState, Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { years, carBrands, models, services } from "./datas";
import { ICarModels, IService } from "@/interfaces/form";

import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { CustomTextArea } from "../customTextArea/CustomTextArea";
import { CustomSelect } from "../customSelect/CustomSelect";
import { CustomUploadFile } from "../customUploadFile/CustomUploadFile";
import { IModel } from "@/interfaces/form";

import metadata from "libphonenumber-js/metadata.min.json";
import { CustomCheckbox } from "../customCheckbox/CustomCheckbox";

const FILE_SIZE = 5 * 1024 * 1024;
const schema = yup.object({
  services: yup.array().required("At least one checkbox must be selected"),
  // .min(1, "At least one checkbox must be selected"),
});

export const Test2 = () => {
  const {
    watch,
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      services: [],
    },
  });

  const onSubmit = handleSubmit((data: any) => console.log(data));
  return (
    <motion.form onSubmit={onSubmit}>
      <div>
        <motion.div viewport={{ once: true }} custom={0} className="mb-4 ">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Services
            <ul className="grid w-full gap-6 md:grid-cols-4">
              {services.map((service: IService) => {
                return (
                  <li key={service.value}>
                    <input
                      {...register("services")}
                      name="services"
                      type="checkbox"
                      value={service.value}
                    />
                    {/* <Controller
                      name="services"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <input type="checkbox" {...field} />
                      )}
                    /> */}
                  </li>
                  // code here
                );
              })}
            </ul>
          </label>
          <p className="text-sm text-red-600">{errors.services?.message}</p>
        </motion.div>
      </div>

      <motion.div
        viewport={{ once: true }}
        custom={5}
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
{
  /* <ul className="grid w-full gap-6 md:grid-cols-4"> */
}
{
  /* <br />
            <hr />
            <ul className="items-center w-full text-sm font-medium text-gray-900 border-gray-200 rounded-lg grid grid-cols-5 gap-1">
              {services.map((service: IService) => {
                return (
                  <li
                    key={service.value}
                    className="w-full border border-gray-200 rounded-md bg-slate-50"
                  >
                    <div className="flex items-center pl-3">
                      <input
                        {...register("services")}
                        name="services"
                        type="checkbox"
                        value={service.value}
                        id={service.value}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor={service.value}
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {service.text}
                      </label>
                    </div>
                  </li>
                );
              })}
            </ul> */
}
