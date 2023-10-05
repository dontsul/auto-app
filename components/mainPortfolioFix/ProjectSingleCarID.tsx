'use client'
import React, { FC } from 'react';
import Link from 'next/link';
import CarCard from "@/components/mainPortfolioFix/projects/CarCard";
import { carDataEdit } from "@/data/dataMainPortfolioEdit/carDataEdit";

interface IProjectSingleIdProps {
    idProject: number;
}

const ProjectSingleCarID: FC<IProjectSingleIdProps> = ({ idProject }) => {
    const project = carDataEdit.find((project) => project.id === Number(idProject));
    return <CarCard  projectId={idProject}/>;
};

export default ProjectSingleCarID;