import React from "react";
import ProjectSingleCarID from "@/components/mainPortfolioFix/ProjectSingleCarID";


interface IProjectSingleProps {
    params: {
        id: number;
    };
}
export default function ProjectSingle({ params: { id } }: IProjectSingleProps) {
    return (
        <div>
            <ProjectSingleCarID idProject={1} />
        </div>
    );
}
