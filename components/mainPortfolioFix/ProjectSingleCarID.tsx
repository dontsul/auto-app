'use client'
import React, { FC, useCallback, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectsFilterCar from '@/components/mainPortfolioFix/projects/ProjectsFilterCar';
import { projectsData } from '@/data/dataMainPortfolioEdit/projectsData';
import ProjectSingleCard from '@/components/mainPortfolioFix/projects/FolderGallery';
import Link from 'next/link';

interface CarCardProps {
    projectId: number;
}

const ProjectSingleCarID: FC<CarCardProps> = ({ projectId }) => {
    const project = projectsData.find((p) => p.id === Number(projectId));
    const [searchProject, setSearchProject] = useState<string>('');
    const [selectProject, setSelectProject] = useState<string>('');
    const [currentCarGalleryOpen, setCurrentCarGalleryOpen] = useState<number | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentCarIndex, setCurrentCarIndex] = useState(0);

    const closeModal = useCallback(() => {
        setModalOpen(false);
    }, []);

    const openGallery = useCallback((carIndex: number) => {
        setCurrentCarIndex(carIndex);
        setCurrentCarGalleryOpen(carIndex);
        setModalOpen(true);
    }, []);

    const filteredCars = project?.cars.filter((car) => {
        const brandLowerCase = car.brand.toLowerCase();
        const searchLowerCase = searchProject.toLowerCase();
        const selectLowerCase = selectProject.toLowerCase();

        return brandLowerCase.includes(searchLowerCase) || brandLowerCase.includes(selectLowerCase);
    }) || [];

    return (
        <div className="container mx-auto">
            <div key={project?.id}>
                <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
                    {project?.title}
                </p>
                <div className="text-center">
                    <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                        Projects portfolio Car
                    </p>
                </div>
                <div className="mt-10 sm:mt-16">
                    <div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
                        <div className="flex justify-between gap-2">
              <span className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
                <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
              </span>
                            <input
                                onChange={(e) => setSearchProject(e.target.value)}
                                className="font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                id="name"
                                name="name"
                                type="search"
                                required
                                placeholder="Search Projects"
                                aria-label="Name"
                            />
                        </div>
                        <ProjectsFilterCar setSelectProject={setSelectProject} />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
                    {filteredCars.map((car, index) => (
                        <div key={index}>
                            <Link href={`/gallery/${project?.id}/${index}`} passHref>
                                <button onClick={() => openGallery(index)}>
                                    <ProjectSingleCard {...car} />
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectSingleCarID;
