import {FC} from 'react';
import {motion} from 'framer-motion';

interface IContactInfoBtn {
    handleContactInfo: (status: boolean) => void;
}

export const ContactInfoBtn: FC<IContactInfoBtn> = ({handleContactInfo}) => {
    return (
        <div
            className="hidden lg:flex items-center justify-center order-3 w-[80px] h-full cursor-pointer"
            onClick={() => handleContactInfo(true)}
        >
            <motion.div className=" w-full h-full flex items-center justify-center">
                <div className="grid grid-cols-3 gap-1 w-6 h-6">
                    <span className="w-[6px] h-[6px] rounded-full border-white border-[1px]"></span>
                    <span className="w-[6px] h-[6px] rounded-full border-white border-[1px]"></span>
                    <span className="w-[6px] h-[6px] rounded-full border-white border-[1px]"></span>
                    <span className="w-[6px] h-[6px] rounded-full border-white border-[1px]"></span>
                    <span className="w-[6px] h-[6px] rounded-full border-white border-[1px]"></span>
                    <span className="w-[6px] h-[6px] rounded-full border-white border-[1px]"></span>
                    <span className="w-[6px] h-[6px] rounded-full border-white border-[1px]"></span>
                    <span className="w-[6px] h-[6px] rounded-full border-white border-[1px]"></span>
                    <span className="w-[6px] h-[6px] rounded-full border-white border-[1px]"></span>
                </div>
            </motion.div>
        </div>
    );
};
