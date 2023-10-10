import React from "react";
import ProjectSingleCarID from "@/components/mainPortfolioFix/ProjectSingleCarID";
import ProjectSingleID from "@/components/mainPortfolioFix/ProjectSingleID";
import ProjectSingleId from "@/components/mainPortfolioFix/ProjectSingleID";


interface IProjectSingleProps {
    params: {
        id: number;
    };
}
export default function ProjectSingle({ params: { id } }: IProjectSingleProps) {
    return (
        <div>
            <ProjectSingleId idProject={id} />
        </div>
    );
}
