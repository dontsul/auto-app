import React, { FC } from 'react';
import CarCard from "@/components/mainPortfolioFix/projects/CarCard";
import { projectsData } from "@/data/dataMainPortfolioEdit/projectsData";

interface IProjectSingleIdProps {
    idProject: number;
}

const ProjectSingleCarID: FC<IProjectSingleIdProps> = ({ idProject }) => {
    const project = projectsData.find((project) => project.id === Number(idProject));

    // Assuming that `project` contains the necessary details for CarCard
    // If not, adjust this accordingly based on your data structure
    return <CarCard projectId={project?.id} />;
};

export default ProjectSingleCarID;
