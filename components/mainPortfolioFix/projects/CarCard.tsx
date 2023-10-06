'use client'
import React, { FC, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import FolderGallery from '@/components/mainPortfolioFix/projects/FolderGallery';
import ProjectsFilterCar from '@/components/mainPortfolioFix/projects/ProjectsFilterCar';
import { projectsData } from '@/data/dataMainPortfolioEdit/projectsData';

interface CarCardProps {
    projectId: number;
}

interface CarProps {
    id: number;
    brand: string;
    img: string;
}

const CarCard: FC<CarCardProps> = ({ projectId }) => {
    const [searchProject, setSearchProject] = useState<string>('');
    const [selectProject, setSelectProject] = useState<string>('');
    const [currentProject, setCurrentProject] = useState<any | undefined>(undefined);

    useEffect(() => {
        const project = projectsData.find((item) => item.id === projectId);
        setCurrentProject(project);
    }, [projectId]);

    const searchProjectsById = currentProject ? [currentProject] : [];
    const selectProjectsByCategory = projectsData.filter((item) =>
        item.cars.some((car) => car.id === projectId)
    );

    const filteredProjects =
        selectProject !== '' ? selectProjectsByCategory : searchProjectsById;

    return (
        <section className=" container py-5 sm:py-10 mt-5 sm:mt-10">
            {/* ... rest of your code ... */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
                {filteredProjects.map((project) =>
                    project.cars.map((car: CarProps) => (
                        <FolderGallery key={car.id} {...car} />
                    ))
                )}
            </div>
        </section>
    );
};

export default CarCard;
