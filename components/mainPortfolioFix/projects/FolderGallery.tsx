import React, { FC } from 'react';
import Image from 'next/image';

interface ProjectProps {
    id: number;
    img: string;
    brand: string;
}

const imageStyle = { maxWidth: '100%', height: 'auto' };

const ProjectSingle: FC<ProjectProps> = (props) => {
    return (
        <div key={props.id}>
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
    );
};

export default ProjectSingle;
