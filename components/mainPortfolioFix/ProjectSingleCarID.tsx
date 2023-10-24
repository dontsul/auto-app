"use client";
import React, { FC, useCallback, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { projectsData } from "@/data/dataMainPortfolioEdit/projectsData";
import ProjectSingleCard from "@/components/mainPortfolioFix/projects/FolderGallery";
import Link from "next/link";
import ProjectsFilterCar from "@/components/mainPortfolioFix/projects/ProjectsFilterCar";

interface CarCardProps {
  projectId: number;
}

const ProjectSingleCarID: FC<CarCardProps> = ({ projectId }) => {
  const project = projectsData.find((p) => p.id === Number(projectId));
  const [searchProject, setSearchProject] = useState<string>("");
  const [selectProject, setSelectProject] = useState<string>("");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCarIndex, setCurrentCarIndex] = useState(0);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const openGallery = useCallback((carIndex: number) => {
    setCurrentCarIndex(carIndex);
    setModalOpen(true);
  }, []);

  const filteredCars =
    project?.cars.filter((car) => {
      const carNameLowerCase = car.brand.toLowerCase();
      const searchLowerCase = searchProject.toLowerCase();
      const selectLowerCase = selectProject.toLowerCase();

      return (
        carNameLowerCase.includes(searchLowerCase) &&
        (selectLowerCase === "" || carNameLowerCase.includes(selectLowerCase))
      );
    }) || [];

  return (
    <div className="container mx-auto">
      <div key={project?.id}>
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
          {project?.title}
        </p>
        <div className="text-center">
          <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Projects portfolio Car
          </p>
        </div>
        <div className="mt-10 sm:mt-16"></div>
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
