import { FC, ReactNode } from "react";

interface TitleBgProps {
  children: ReactNode;
}

export const TitleBg: FC<TitleBgProps> = ({ children }) => {
  return (
    <div className="overflow-hidden text-7xl sm:text-8xl md:text-9xl lg:text-[228px] font-black opacity-10 text-center z-[-10] sticky bottom-[100px]">
      {children}
    </div>
  );
};
