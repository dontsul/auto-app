"use client";

import { FC, forwardRef, SelectHTMLAttributes } from "react";
import { IContactMe } from "@/interfaces/form";

interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  contactMeVariants: IContactMe[];
}

export const CustomSelect: FC<CustomSelectProps> = forwardRef<
  HTMLSelectElement,
  CustomSelectProps
>(function CustomSelectComponent({ name, contactMeVariants, ...props }, ref) {
  return (
    <select
      // defaultValue={contactMeVariants[0].value}
      {...props}
      name={name}
      ref={ref}
      className="focus:outline-none bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:ring-black focus:border-black block w-full py-2.5 px-1"
    >
      {contactMeVariants.map((item) => {
        return (
          <option
            // selected={item.selected ? true : false}
            hidden={item.hidden ? true : false}
            disabled={item.disabled ? true : false}
            key={item.value}
          >
            {item.text}
          </option>
        );
      })}
    </select>
  );
});

CustomSelect.displayName = "CustomSelect";
