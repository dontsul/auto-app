import ProjectSingleId from "@/components/mainPortfolioFix/ProjectSingleID";
import { projectsData } from '@/data/dataMainPortfolioEdit/projectsData';

interface GalleryPageProps {
    params: {
        projectId: string;
        carIndex: string;
    };
}

export default function GalleryPage({ params }: GalleryPageProps) {
    const { projectId, carIndex } = params;
    const project = projectsData.find((p) => p.id === Number(projectId));
    const car = project?.cars[Number(carIndex)];

    if (!project || !car) {
        return <div>Error: Project or Car not found</div>;
    }

    return (
        <div className="py-16 containe">
            <ProjectSingleId project={project} gallery={car.gallery || []} carIndex={Number(carIndex)} />
        </div>
    );
}
