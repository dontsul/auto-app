import React from "react";
import ProjectSingleCarID from "@/components/mainPortfolioFix/ProjectSingleCarID";
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

