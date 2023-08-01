import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

interface Project {
	id: string;
	title: string;
	img: string;
}

interface RelatedProjectData {
	title: string;
	Projects: Project[];
}

const RelatedProject: RelatedProjectData = {
	title: 'Related Projects',
	Projects: [
		{
			id: uuidv4(),
			title: 'TEST1',
			img: '/public/Ceramic/Carbon-2-front-1.webp',
		},
		{
			id: uuidv4(),
			title: 'TEST2',
			img: '/public/Ceramic/Carbon-2-front-1.webp',
		},
		{
			id: uuidv4(),
			title: 'TEST3',
			img: '/public/Ceramic/Carbon-2-front-1.webp',
		},
		{
			id: uuidv4(),
			title: 'TEST4',
			img: '/public/Ceramic/Carbon-2-front-1.webp',
		},
	],
};

function RelatedProjects() {
	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{RelatedProject.title}
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{RelatedProject.Projects.map((project) => (
					<Image
						src={project.img}
						className="rounded-xl cursor-pointer"
						width="400"
						height="400"
						alt={project.title}
						key={project.id}
					/>
				))}
			</div>
		</div>
	);
}

export default RelatedProjects;
