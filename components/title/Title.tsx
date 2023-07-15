import { FC, ReactNode } from "react";

interface ITitleProps {
  tag: string;
  cn?: string;
  children: ReactNode;
}

export const Title: FC<ITitleProps> = ({ tag, cn, children }) => {
  switch (tag) {
    case "h1":
      return (
        <h1 className="font-extrabold text-slate-900 uppercase text-center">
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`font-extrabold text-slate-900 uppercase text-4xl lg:text-6xl text-center z-30 ${
            cn ? cn : ""
          }`}
        >
          {children}
        </h2>
      );
    case "h4":
      return (
        <h4 className="font-extrabold text-slate-900 uppercase text-center">
          {children}
        </h4>
      );
    default:
      return null;
  }
};
