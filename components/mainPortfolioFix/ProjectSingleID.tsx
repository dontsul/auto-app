import { FC } from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import Image from 'next/image';
import {projectsData} from "@/components/mainPortfolioFix/data/projectsData";
import RelatedProjects from "@/components/mainPortfolioFix/projects/RelatedProjects";



const ProjectSingleId: FC = () => {
    return (
        <div className="container mx-auto">
            {projectsData.map((project) => (
                <div key={project.id}>
                    <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
                        {project.title}
                    </p>
                    <div className="flex">
                        <div className="flex items-center mr-10">
                            <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
                            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                                {project.ProjectHeader.publishDate}
                            </span>
                        </div>
                        <div className="flex items-center">
                            <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
                            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                                {project.ProjectHeader.tags}
                            </span>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
                        {project.ProjectImages.map((image) => (
                            <div className="mb-10 sm:mb-0" key={image.id}>
                                <Image
                                    src={image.img}
                                    className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                                    alt={image.title}
                                    key={image.id}
                                    layout="responsive"
                                    width={100}
                                    height={90}
                                />
                            </div>
                        ))}
                    </div>


                </div>



            ))}
            <div className="block sm:flex gap-0 sm:gap-10 mt-14">
                <div className="w-full sm:w-1/3 text-left">
                    {/* Single project client details */}
                    <div className="mb-7">
                        {projectsData.map((info)=>{
                            return(
                                <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
                                    {info.ProjectInfo.ClientHeading}
                                </p>
                            );
                        })}

                        <ul className="leading-loose">
                            {projectsData.map(
                                (info) => {
                                    return (
                                        <li
                                            className="font-general-regular text-ternary-dark dark:text-ternary-light"
                                            key={info.id}
                                        >
                                            <span>{info.title}: </span>
                                            <a
                                                className={
                                                    info.title === 'Website' ||
                                                    info.title === 'Phone'
                                                        ? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
                                                        : ''
                                                }
                                                aria-label="Project Website and Phone"
                                            >
                                                {info.ProjectInfo.ProjectDetailsHeading}
                                            </a>
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSingleId;
