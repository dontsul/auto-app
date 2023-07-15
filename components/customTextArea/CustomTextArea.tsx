"use client";

import {
  FC,
  InputHTMLAttributes,
  forwardRef,
  TextareaHTMLAttributes,
} from "react";

interface CustomTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const CustomTextArea: FC<CustomTextAreaProps> = forwardRef<
  HTMLTextAreaElement,
  CustomTextAreaProps
>(function TextArea({ name, ...props }, ref) {
  return (
    <textarea
      rows={7}
      style={{ resize: "none" }}
      {...props}
      name={name}
      ref={ref}
      className="focus:outline-none bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:ring-black focus:border-black block w-full p-2.5"
    />
  );
});

CustomTextArea.displayName = "CustomTextArea";
