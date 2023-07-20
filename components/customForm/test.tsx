// "use client";

// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { Button } from "../button/Button";
// import { Input } from "../input/Input";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { AiOutlineClose } from "react-icons/ai";
// import { v4 as uuidv4 } from "uuid";

// import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
// import { isPossiblePhoneNumber } from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import { CustomTextArea } from "../customTextArea/CustomTextArea";
// import { CustomSelect } from "../customSelect/CustomSelect";
// import { CustomUploadFile } from "../customUploadFile/CustomUploadFile";

// import metadata from "libphonenumber-js/metadata.min.json";
// import { useEffect, useState } from "react";

// const contactMeVariants = [
//   {
//     value: "contactMe",
//     text: "Select an option",
//     disabled: true,
//     selected: true,
//   },
//   { value: "callMe", text: "Call Me" },
//   { value: "emailMe", text: "Email Me" },
//   { value: "smsMe", text: "SMS Me" },
// ];

// const FILE_SIZE = 5 * 1024 * 1024;
// const schema = yup
//   .object({
//     firstName: yup.string().required("Name is a required field"),
//     lastName: yup.string().required("Name is a required field"),
//     // phone: yup.string().required("Phone is a required field"),
//     // email: yup.string().email().required("Email is a required field"),
//     // comment: yup.string().required("Comments is a required field"),
//     file: yup
//       .mixed()
//       .test("fileSize", "File size is too large", (value) => {
//         if (!value) return true;
//         const v = Object.values(value as File);
//         return v && v[0].size <= FILE_SIZE;
//       })
//       .test("fileCount", "Maximum 5 files allowed", (value) => {
//         if (!value) return true;
//         const fileCount = Array.isArray(value) ? value.length : 0;
//         return fileCount <= 5;
//       }),
//   })
//   .required();

// export const CustomForm = () => {
//   const formLeftAnimation = {
//     hidden: {
//       x: -100,
//       opacity: 0,
//     },
//     visible: (custom: any) => ({
//       x: 0,
//       opacity: 1,
//       transition: {
//         delay: custom * 0.4,
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     }),
//   };
//   const formRightAnimation = {
//     hidden: {
//       x: 100,
//       opacity: 0,
//     },
//     visible: (custom: any) => ({
//       x: 0,
//       opacity: 1,
//       transition: {
//         delay: custom * 0.4,
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     }),
//   };
//   const {
//     watch,
//     control,
//     handleSubmit,
//     register,
//     setValue,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       // phone: "",
//       // email: "",
//       file: [],
//       // comment: "",
//     },
//   });
//   const onSubmit = handleSubmit((data: any) => console.log(data));

//   // const [image, setImage] = useState<string>("");

//   // const converToBase64 = (file) => {
//   //   const reader = new FileReader();
//   //   reader.onloadend = () => {
//   //     setImage(reader.result?.toString());
//   //   };

//   //   reader.readAsDataURL(file);
//   // };

//   // const handleImageLoad = (img) => {
//   //   if (watch("file")) {
//   //     converToBase64(img);
//   //   }
//   // };
//   const [images, setImages] = useState<string[]>([]);

//   const convertToBase64 = (file: File) => {
//     return new Promise<string>((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         resolve(reader.result?.toString() || "");
//       };
//       reader.onerror = reject;
//       reader.readAsDataURL(file);
//     });
//   };

//   const addToArray = (newItem: File) => {
//     const currentValue = watch("file");
//     if (currentValue !== undefined) {
//       const updatedArray = [...currentValue, newItem];
//       setValue("file", updatedArray);
//     }
//   };

//   const handleImageLoad = async (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const files = Array.from(event.target.files || []);
//     const base64Images = await Promise.all(files.map(convertToBase64));
//     setImages((prevImages) => [...prevImages, ...base64Images]);
//   };
//   const handleDeleteImage = (image: string) => {
//     const filteredImages = images.filter((img) => img !== image);
//     setImages(filteredImages);
//   };
//   console.log(images);
//   console.log(watch("file"));
//   return (
//     <motion.form
//       initial="hidden"
//       whileInView="visible"
//       onSubmit={onSubmit}
//       className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-x-hidden"
//       viewport={{ once: true }}
//     >
//       {/* first last name */}
//       <motion.div
//         viewport={{ once: true }}
//         custom={0}
//         variants={formLeftAnimation}
//         className="mb-4 "
//       >
//         <label className="block mb-2 text-sm font-medium text-gray-900">
//           First Name
//           <Controller
//             name="firstName"
//             control={control}
//             render={({ field }) => (
//               <Input {...field} placeholder="Write your first name" />
//             )}
//           />
//         </label>
//         <p className="text-sm text-red-600">{errors.firstName?.message}</p>
//       </motion.div>
//       <motion.div
//         viewport={{ once: true }}
//         custom={0}
//         variants={formLeftAnimation}
//         className="mb-4 "
//       >
//         <label className="block mb-2 text-sm font-medium text-gray-900">
//           Last Name
//           <Controller
//             name="lastName"
//             control={control}
//             render={({ field }) => (
//               <Input {...field} placeholder="Write your last name" />
//             )}
//           />
//         </label>
//         <p className="text-sm text-red-600">{errors.lastName?.message}</p>
//       </motion.div>
//       {/* first last name */}
//       {/* phone */}
//       {/* <motion.div
//         viewport={{ once: true }}
//         className="mb-4 "
//         custom={1}
//         variants={formRightAnimation}
//       >
//         <label className="block mb-2 text-sm font-medium text-gray-900">
//           Phone
//           <PhoneInputWithCountry
//             className="phoneInputCustom focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-800 focus:border-zinc-800 block w-full p-2.5 "
//             control={control}
//             rules={{ required: true, validate: isPossiblePhoneNumber }}
//             defaultCountry="US"
//             autoComplete="tel"
//             displayInitialValueAsLocalNumber
//             defaultValue=""
//             international
//             withCountryCallingCode
//             name="phone"
//             metadata={metadata}
//           />
//         </label>
//         <p className="text-sm text-red-600">{errors.phone?.message}</p>
//       </motion.div> */}
//       {/* phone */}
//       {/* email */}
//       {/* <motion.div
//         viewport={{ once: true }}
//         className="mb-4 "
//         custom={2}
//         variants={formLeftAnimation}
//       >
//         <label className="block mb-2 text-sm font-medium text-gray-900">
//           Email
//           <Controller
//             name="email"
//             control={control}
//             render={({ field }) => (
//               <Input {...field} placeholder="Write your email" />
//             )}
//           />
//         </label>
//         <p className="text-sm text-red-600">{errors.email?.message}</p>
//       </motion.div> */}
//       {/* email */}

//       {/* ------------------------------- */}

//       <motion.div
//         viewport={{ once: true }}
//         className="mb-4 block"
//         custom={4}
//         variants={formLeftAnimation}
//       >
//         <label className="block mb-2 text-sm font-medium text-gray-900">
//           Upload File
//           <div className="overflow-hidden flex focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-800 focus:border-zinc-800 w-full">
//             {/* <input
//               type="file"
//               {...register("file")}
//               className="absolute opacity-0 w-[164px] left-0"
//               multiple
//               onChange={handleImageLoad}
//             /> */}
//             <input
//               type="file"
//               {...register("file")}
//               className="absolute opacity-0 w-[164px] left-0"
//               onChange={(e) => handleImageLoad(e)}
//             ></input>
//             <div className="cursor-pointer relative box-border h-full font-normal text-sm text-center border-r-[1px] border-zinc-800 text-slate-50 bg-zinc-800 w-[240px] p-2.5 mr-4">
//               Upload File{" "}
//             </div>
//             <div className="flex items-center w-full">
//               {" "}
//               {watch("file") !== undefined && watch("file") ? (
//                 <span className="text-zinc-800">
//                   You download {images.length} image
//                 </span>
//               ) : (
//                 <span className="text-sm text-gray-400">Upload your file</span>
//               )}
//             </div>
//           </div>
//         </label>
//         <div className="flex items-center gap-2 flex-wrap">
//           {images.map((image, index) => (
//             <div className="relative" key={uuidv4()}>
//               <Image
//                 src={image}
//                 alt={`Preview ${index}`}
//                 className="w-20 h-20 rounded-md shadow-md"
//                 width={320}
//                 height={320}
//               />
//               <div
//                 className="absolute top-1 right-1 p-1 backdrop-blur-[4px] rounded-md cursor-pointer"
//                 onClick={() => handleDeleteImage(image)}
//               >
//                 <AiOutlineClose color="white" />
//               </div>
//             </div>
//           ))}
//         </div>
//         <p className="text-sm text-red-600">{errors.file?.message}</p>
//       </motion.div>
//       {/* ------------------------------- */}

//       {/* <motion.div
//         viewport={{ once: true }}
//         className="mb-4 col-span-1 md:col-span-2"
//         custom={4}
//         variants={formLeftAnimation}
//       >
//         <label className="block mb-2 text-sm font-medium text-gray-900">
//           Your message
//           <Controller
//             name="comment"
//             control={control}
//             render={({ field }) => (
//               <CustomTextArea {...field} placeholder="Write your comment" />
//             )}
//           />
//         </label>

//         <p className="text-sm text-red-600">{errors.comment?.message}</p>
//       </motion.div> */}

//       <motion.div
//         viewport={{ once: true }}
//         custom={5}
//         variants={formRightAnimation}
//         className="flex items-center justify-center mb-4 col-span1 md:col-span-2"
//       >
//         <Button
//           type="submit"
//           handleClick={() => {}}
//           cn="w-full"
//           outline={false}
//         >
//           Submit
//         </Button>
//       </motion.div>
//     </motion.form>
//   );
// };

// {
//   /* <motion.div
//         viewport={{ once: true }}
//         className="mb-4  block"
//         custom={3}
//         variants={formRightAnimation}
//       >
//         <label className="block mb-2 text-sm font-medium text-gray-900">
//           Contact Me
//           <Controller
//             name="contactMe"
//             control={control}
//             render={({ field }) => (
//               <CustomSelect contactMeVariants={contactMeVariants} {...field} />
//             )}
//           />
//         </label>
//         <p className="text-sm text-red-600">{errors.contactMe?.message}</p>
//       </motion.div> */
// }

// // <motion.div
// // viewport={{ once: true }}
// // className="mb-4  block"
// // custom={3}
// // variants={formRightAnimation}
// // >
// // <label className="block mb-2 text-sm font-medium text-gray-900">
// //   Upload File
// //   <div className="overflow-hidden flex focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-800 focus:border-zinc-800 w-full">
// //     <input
// //       onLoad={() => handleImageLoad((watch("file") as File)[0])}
// //       type="file"
// //       {...register("file")}
// //       className="absolute opacity-0 w-[164px] left-0"
// //     ></input>
// //     <div className="cursor-pointer relative box-border h-full font-normal text-sm text-center border-r-[1px] border-zinc-800 text-slate-50 bg-zinc-800 w-[240px] p-2.5 mr-4">
// //       Upload File
// //     </div>
// //     <div className="flex items-center w-full">
// //       {watch("file") ? (
// //         <span className="text-zinc-800">
// //           {/* {fileName} */}
// //           {Object.values(watch("file") as File)[0].name}
// //           {}
// //         </span>
// //       ) : (
// //         <span className="text-sm text-gray-400">Upload your file</span>
// //       )}
// //     </div>
// //   </div>
// //   <div>{watch("file") ? "" : ""}</div>
// // </label>
// // <p className="text-sm text-red-600">{errors.file?.message}</p>
// // </motion.div>

// //рабочий код
// {
//   /* <motion.div
//   viewport={{ once: true }}
//   className="mb-4 block"
//   custom={4}
//   variants={formLeftAnimation}
// >
//   <label className="block mb-2 text-sm font-medium text-gray-900">
//     Upload File
//     <div className="overflow-hidden flex focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-800 focus:border-zinc-800 w-full">
//       <input
//         type="file"
//         {...register("file")}
//         className="absolute opacity-0 w-[164px] left-0"
//         multiple
//         onChange={handleImageLoad}
//       />
//     </div>
//     <div>
//       {images.map((image, index) => (
//         <Image
//           key={index}
//           src={image}
//           alt={`Preview ${index}`}
//           className="w-40 h-40"
//           width={40}
//           height={40}
//         />
//       ))}
//     </div>
//   </label>
//   <p className="text-sm text-red-600">{errors.file?.message}</p>
// </motion.div>; */
// }
