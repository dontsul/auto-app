'use client';

import {FC, ReactNode} from 'react';
import {motion} from 'framer-motion';

interface IButtonProps {
    children: ReactNode;
    outline: boolean;
    cn?: string;
    handleClick: () => void;
}

export const Button: FC<IButtonProps> = ({children, outline, cn, handleClick}) => {
    return (
        <motion.button
            whileHover={{
                backgroundColor: outline ? '#000000' : '#ffffff',
                color: outline ? '#ffffff' : '#000000',
            }}
            className={`font-medium py-2 px-8 border-[1px] border-black border-solid
      ${outline ? 'bg-inherit text-black' : 'bg-black text-white'}
      ${cn ? cn : ''}
      `}
            onClick={handleClick}
        >
            {children}
        </motion.button>
    );
};
