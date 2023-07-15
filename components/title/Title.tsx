import {FC, ReactNode} from 'react';

interface ITitleProps {
    tag: string;
    cn?: string;
    children: ReactNode;
}

export const Title: FC<ITitleProps> = ({tag, cn, children}) => {
    switch (tag) {
        case 'h1':
            return <h1 className="text-6xl text-slate-950">{children}</h1>;
        case 'h2':
            return <h2 className="text-4xl text-slate-950">{children}</h2>;
        case 'h4':
            return <h4 className="text-2xl text-slate-950">{children}</h4>;
        default:
            break;
    }
};
