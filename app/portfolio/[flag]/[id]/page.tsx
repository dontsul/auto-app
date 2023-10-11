import React from "react";
import ProjectSingleId from "@/components/mainPortfolioFix/ProjectSingleID";
import ProjectSingleCarID from "@/components/mainPortfolioFix/ProjectSingleCarID";
import ProjectSingleID from "@/components/mainPortfolioFix/ProjectSingleID";
interface IProjectSingleProps {
    params: {
        id: number;
    };
}
export default function ProjectSingle({ params: { id } }: IProjectSingleProps) {
    return (
        <div className="py-16 containe">

        <ProjectSingleCarID  projectId={id}/>
        </div>
    );
};

