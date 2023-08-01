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
                                    {info.ProjectHeader.publishDate}
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
                                                href="https://stoman.me"
                                                className={
                                                    info.title === 'Website' ||
                                                    info.title === 'Phone'
                                                        ? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
                                                        : ''
                                                }
                                                aria-label="Project Website and Phone"
                                            >
                                                {info.ProjectInfo.ClientHeading}
                                            </a>
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                    </div>

                    {/* Single project objectives */}
                    {/*<div className="mb-7">*/}
                    {/*    <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">*/}
                    {/*        {props.project.ProjectInfo.ObjectivesHeading}*/}
                    {/*    </p>*/}
                    {/*    <p className="font-general-regular text-primary-dark dark:text-ternary-light">*/}
                    {/*        {props.project.ProjectInfo.ObjectivesDetails}*/}
                    {/*    </p>*/}
                    {/*</div>*/}

                    {/* Single project technologies */}
                    {/*<div className="mb-7">*/}
                    {/*    <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">*/}
                    {/*        {props.project.ProjectInfo.Technologies[0].title}*/}
                    {/*    </p>*/}
                    {/*    <p className="font-general-regular text-primary-dark dark:text-ternary-light">*/}
                    {/*        {props.project.ProjectInfo.Technologies[0].techs.join(*/}
                    {/*            ', '*/}
                    {/*        )}*/}
                    {/*    </p>*/}
                    {/*</div>*/}

                    {/* Single project social sharing */}
                    <div>
                        {/*<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">*/}
                        {/*    {props.project.ProjectInfo.SocialSharingHeading}*/}
                        {/*</p>*/}
                        {/* <div className="flex items-center gap-3 mt-5">
							{props.project.ProjectInfo.SocialSharing.map(
								(social, index) => {
									<Link
										key={index}
										href={social.url}
										target="__blank"
										passHref={true}
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</Link>;
								}
							)}
						</div> */}
                    </div>
                </div>

                {/*  Single project right section details */}
            {/*    <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">*/}
            {/*        <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">*/}
            {/*            {props.project.ProjectInfo.ProjectDetailsHeading}*/}
            {/*        </p>*/}
            {/*        {props.project.ProjectInfo.ProjectDetails.map((details) => {*/}
            {/*            return (*/}
            {/*                <p*/}
            {/*                    key={details.id}*/}
            {/*                    className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"*/}
            {/*                >*/}
            {/*                    {details.details}*/}
            {/*                </p>*/}
            {/*            );*/}
            {/*        })}*/}
            {/*    </div>*/}
            {/*</div>*/}

            <RelatedProjects />
        </div>

        </div>
    );
};

export default ProjectSingleId;
