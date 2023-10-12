import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC } from 'react';

interface ProjectProps {
	id: number;
	img: string;
	title: string;
	category: string;
}

const imageStyle = { maxWidth: '100%', height: 'auto' };

const ProjectSingle: FC<ProjectProps> = (props) => {
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
			<Link href={`/portfolio/${props.category}/${props.id}`} passHref>
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<Image
							src={props.img}
							alt="Single Project"
							layout="responsive"
							width={100}
							height={100}
							objectFit="cover"  // Add this line
							objectPosition="center center"  // Add this line
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
							{props.title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
                            {props.category}
                        </span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
