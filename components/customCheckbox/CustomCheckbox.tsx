"use client";

import { FC, InputHTMLAttributes, forwardRef } from "react";
import { IService } from "@/interfaces/form";
interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export const CustomCheckbox: FC<CheckboxProps> = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(function InputComponent({ name, ...props }, ref) {
  return (
    <li>
      <input
        type="checkbox"
        // id={service.value}
        {...props}
        name={name}
        ref={ref}
        className="hidden peer"
      />
      <label
        htmlFor="react-option"
        className="inline-flex items-center justify-between w-full p-2.5 shadow-lg text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer   peer-checked:border-[#111827] hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 "
      >
        <div className="block">
          {/* <div className="w-full font-semibold">{service.text}</div> */}
        </div>
      </label>
    </li>
  );
});

CustomCheckbox.displayName = "CustomCheckbox";
