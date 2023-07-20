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
import { years, carBrands, models, services, states } from "./datas";
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
  firstName: yup.string().required("Name is a required field"),
  lastName: yup.string().required("Name is a required field"),
  phone: yup.string().required("Phone is a required field"),
  email: yup.string().email().required("Email is a required field"),
  comment: yup.string().required("Comments is a required field"),
  file: yup
    .mixed()
    .test("fileSize", "File size is too large", (value: any) => {
      if (value?.length === 0) return true;
      const v = Object.values(value as File);
      return v && v[0]?.size <= FILE_SIZE;
    })
    .test("fileCount", "Maximum 5 files allowed", (value) => {
      if (!value) return true;
      const fileCount = Object.values(value) ? Object.values(value).length : 0;
      return fileCount <= 5;
    }),
  year: yup.string().required("Year is a required field"),
  make: yup.string().required("Make is a required field"),
  model: yup.string().required("Model is a required field"),
  licensePlate: yup.string(),
  state: yup.string(),
  services: yup
    .array()
    .required("At least one checkbox must be selected")
    .min(1, "At least one checkbox must be selected"),
});

export const CustomForm = () => {
  const formLeftAnimation = {
    hidden: {
      x: -100,
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
      x: 100,
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
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      file: [],
      comment: "",
      year: "",
      make: "",
      model: "",
      licensePlate: "",
      state: "",
      services: [],
    },
  });
  const [arrayImages, setArrayImages] = useState<File[]>([] as File[]);
  const onSubmit = handleSubmit((data: any) => console.log(data));
  const selectedPhotos = watch("file") as File[];

  // const selectedMake = watch("make");
  // const [selectedModels, setSelectedModels] = useState<IModel[]>([]);

  // useEffect(() => {
  //   if (selectedMake) {
  //     setSelectedModels(models[selectedMake] || []);
  //   } else {
  //     setSelectedModels([]);
  //   }
  // }, [selectedMake]);

  const handleDeletePhoto = (photo: File) => {
    const updatedPhotos = arrayImages.filter((item) => item !== photo);
    setArrayImages(updatedPhotos);
    setValue("file", updatedPhotos);
  };

  useEffect(() => {
    if (selectedPhotos !== undefined) {
      if (selectedPhotos.length === 0) return;
    }
    setArrayImages([...selectedPhotos]);
  }, [selectedPhotos]);

  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      onSubmit={onSubmit}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-x-hidden"
      viewport={{ once: true }}
    >
      {/* first name */}
      <motion.div
        viewport={{ once: true }}
        custom={0}
        variants={formLeftAnimation}
        className="mb-4 "
      >
        <label className="block mb-2 text-sm font-medium text-gray-900">
          First Name*
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Write your first name" />
            )}
          />
        </label>
        <p className="text-sm text-red-600">{errors.firstName?.message}</p>
      </motion.div>
      {/* first name */}
      {/* last name */}
      <motion.div
        viewport={{ once: true }}
        custom={0}
        variants={formLeftAnimation}
        className="mb-4 "
      >
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Last Name*
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Write your last name" />
            )}
          />
        </label>
        <p className="text-sm text-red-600">{errors.lastName?.message}</p>
      </motion.div>
      {/* last name */}
      {/* Phone*/}
      <motion.div
        viewport={{ once: true }}
        className="mb-4 "
        custom={1}
        variants={formRightAnimation}
      >
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Phone*
          <PhoneInputWithCountry
            className="phoneInputCustom focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-800 focus:border-zinc-800 block w-full p-2.5 "
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
      {/* Phone*/}
      {/* Email*/}
      <motion.div
        viewport={{ once: true }}
        className="mb-4 "
        custom={2}
        variants={formLeftAnimation}
      >
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Email*
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
      {/* Email*/}

      {/* ------------------------------- */}
      {/* -------auto data----------------- */}

      {/* year */}
      <motion.div
        viewport={{ once: true }}
        custom={0}
        variants={formLeftAnimation}
        className="mb-4 "
      >
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Year*
          <Controller
            name="year"
            control={control}
            render={({ field }) => (
              <CustomSelect
                datas={years}
                {...field}
                placeholder="Write your first name"
              />
            )}
          />
        </label>
        <p className="text-sm text-red-600">{errors.year?.message}</p>
      </motion.div>
      {/* year */}

      {/* make */}
      <motion.div
        viewport={{ once: true }}
        custom={0}
        variants={formLeftAnimation}
        className="mb-4 "
      >
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Make*
          <Controller
            name="make"
            control={control}
            render={({ field }) => (
              <CustomSelect
                datas={carBrands}
                {...field}
                placeholder="Choose your make"
              />
            )}
          />
        </label>
        <p className="text-sm text-red-600">{errors.make?.message}</p>
      </motion.div>
      {/* make */}
      {/* model */}
      <motion.div
        viewport={{ once: true }}
        custom={0}
        variants={formLeftAnimation}
        className="mb-4 "
      >
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Model*
          <Controller
            name="model"
            control={control}
            render={({ field }) => (
              <CustomSelect
                datas={watch("make") ? models[watch("make")] : models.default}
                {...field}
                placeholder="Choose your make"
              />
            )}
          />
        </label>
        <p className="text-sm text-red-600">{errors.make?.message}</p>
      </motion.div>
      {/*----------------------- license plate----------------- /> */}
      <motion.div
        viewport={{ once: true }}
        custom={0}
        variants={formLeftAnimation}
        className="grid grid-cols-[70%_auto] gap-4"
      >
        <div className="mb-4 ">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            License Plate
            <Controller
              name="licensePlate"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="Write your license plate" />
              )}
            />
          </label>
          <p className="text-sm text-red-600">{errors.licensePlate?.message}</p>
        </div>
        <div className="mb-4 ">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            State
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  datas={states}
                  {...field}
                  placeholder="Choose your make"
                />
              )}
            />
          </label>
          <p className="text-sm text-red-600">{errors.state?.message}</p>
        </div>
      </motion.div>
      {/*----------------------- license plate----------------- /> */}
      {/* -------auto data----------------- */}

      {/* -------------------------------services------------------------- */}
      <motion.div
        viewport={{ once: true }}
        custom={0}
        variants={formLeftAnimation}
        className="mb-4 col-span-1 md:col-span-3"
      >
        <div className="block mb-2 text-sm font-medium text-gray-900">
          Services*
          <ul className="grid w-full gap-6 grid-cols-1 md:grid-cols-4">
            {services.map((service: IService) => {
              return (
                <li key={service.value}>
                  <input
                    {...register("services")}
                    name="services"
                    type="checkbox"
                    value={service.value}
                    className="hidden peer"
                    id={service.value}
                  />
                  <label
                    htmlFor={service.value}
                    className="inline-flex items-center justify-between w-full p-2.5 shadow-lg text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer   peer-checked:border-[#111827] hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 "
                  >
                    <div className="block p-2">
                      <div className="w-full font-semibold">{service.text}</div>
                    </div>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="text-sm text-red-600">{errors.services?.message}</p>
      </motion.div>
      {/* -------------------------------services------------------------- */}
      {/* -------------------------------comment-------------------------- */}
      <motion.div
        viewport={{ once: true }}
        className="mb-4 col-span-1 md:col-span-3"
        custom={4}
        variants={formLeftAnimation}
      >
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Your message
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
      {/* -------------------------------comment-------------------------- */}
      {/* --------------images----------------- */}
      <motion.div
        viewport={{ once: true }}
        className="mb-4 block col-span-1 md:col-span-1"
        custom={1}
        variants={formLeftAnimation}
      >
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Upload File
          <div className="overflow-hidden flex focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-800 focus:border-zinc-800 w-full">
            <input
              type="file"
              {...register("file")}
              className="absolute opacity-0 w-[164px] left-0"
              multiple
            ></input>
            <div className="cursor-pointer relative box-border h-full font-normal text-sm text-center border-r-[1px] border-zinc-800 text-slate-50 bg-zinc-800 w-[240px] p-2.5 mr-4">
              Upload File{" "}
            </div>
            <div className="flex items-center w-full">
              {" "}
              {arrayImages.length > 0 ? (
                <span className="text-zinc-800">
                  You download {arrayImages.length} image
                </span>
              ) : (
                <span className="text-sm text-gray-400">Upload your file</span>
              )}
            </div>
          </div>
        </label>

        {arrayImages !== undefined && arrayImages.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            {arrayImages.map((photo: File, index: number) => (
              <div
                className="relative h-[80px] w-[80px] rounded-md"
                key={uuidv4()}
              >
                <Image
                  key={index}
                  src={URL.createObjectURL(photo)}
                  alt={`Фото ${index}`}
                  width={80}
                  height={80}
                  className="h-[80px] w-[80px] rounded-md shadow-md"
                />
                <div
                  className="absolute top-1 right-1 p-1 backdrop-blur-[4px] rounded-md cursor-pointer"
                  onClick={() => handleDeletePhoto(photo)}
                >
                  <AiOutlineClose color="white" />
                </div>
              </div>
            ))}
          </div>
        )}
        <p className="text-sm text-red-600">{errors.file?.message}</p>
      </motion.div>
      {/* --------------images----------------- */}
      <motion.div
        viewport={{ once: true }}
        custom={5}
        variants={formRightAnimation}
        className="flex items-center justify-center mb-4 col-span1 md:col-span-3"
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
