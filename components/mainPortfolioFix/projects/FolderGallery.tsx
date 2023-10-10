import React, { FC } from 'react';
import Image, {StaticImageData} from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';


interface ProjectProps {
    projectId: number,
    id: string;
    img: StaticImageData;
    brand: string;
}

const imageStyle = { maxWidth: '100%', height: 'auto' };

const ProjectSingleCard: FC<ProjectProps> = (props) => {
    console.log(props.projectId);
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
            <Link href={`/portfolio/car/${props.projectId}`} passHref>
                <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                    <div key={props.projectId}>
                        <Image
                            src={props.img}
                            className="rounded-t-xl border-none"
                            alt={props.brand}
                            layout="responsive"
                            width={100}
                            height={90}
                        />
                        <div className="text-center px-4 py-6">
                            <p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
                                {props.brand}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectSingleCard;
