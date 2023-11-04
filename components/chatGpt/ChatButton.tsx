import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface IButtonProps {
    children: ReactNode;
    outline: boolean;
    type: "button" | "submit" | "reset";
}

export const ChatButton: FC<IButtonProps> = ({
                                             children,
                                             outline,
                                             type,
                                         }) => {
    return (
        <motion.button
            whileHover={{
                backgroundColor: outline ? "#000000" : "#ffffff",
                color: outline ? "#ffffff" : "#000000",
            }}
            className={`font-medium py-1 px-4 border-[1px] border-black border-solid rounded-md
      ${outline ? "bg-inherit text-[#111827]" : "bg-[#111827] text-white"}`}
            type={type ? type : "button"}
        >
            {children}
        </motion.button>
    );
};
