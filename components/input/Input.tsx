"use client";

import { FC, InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  function InputComponent({ name, ...props }, ref) {
    return (
      <input
        {...props}
        name={name}
        ref={ref}
        className="focus:outline-none bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:ring-black focus:border-black block w-full p-2.5"
      />
    );
  }
);

Input.displayName = "Input";
