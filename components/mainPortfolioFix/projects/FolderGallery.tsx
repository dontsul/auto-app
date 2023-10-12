import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image, {StaticImageData} from 'next/image';

interface ProjectProps {
    img: StaticImageData;
    brand: string;
}

const imageStyle = { maxWidth: '100%', height: 'auto' };

const ProjectSingleCard: FC<ProjectProps> = (props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: 'easeInOut',
                duration: 0.7,
                delay: 0.15,
            }}
        >
                <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                    <Image
                        src={props.img}
                        className="rounded-t-xl border-none"
                            alt={props.brand}
                            layout="responsive"
                            width={100}
                            height={100}
                        />
                        <div className="text-center px-4 py-6">
                            <p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
                                {props.brand}
                            </p>
                        </div>
                </div>
        </motion.div>
    );
};

export default ProjectSingleCard;
