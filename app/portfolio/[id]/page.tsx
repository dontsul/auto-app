import React from "react";
import ProjectSingleId from "@/components/mainPortfolioFix/ProjectSingleID";
import ProjectSingleCarID from "@/components/mainPortfolioFix/ProjectSingleCarID";
import CarCard from "@/components/mainPortfolioFix/projects/CarCard";
import ProjectSingleID from "@/components/mainPortfolioFix/ProjectSingleID";
interface IProjectSingleID {
    params: {
        id: number;
    };
}
export default function ProjectSingle ({ params: { id }}: IProjectSingleID) {
    return (
        <div>
               <ProjectSingleId idProject={id} />
        </div>
    );
};

