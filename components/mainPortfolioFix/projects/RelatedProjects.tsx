import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import patriotLiner from "@/public/portfolio/patriot-liner/main.jpg";
import wheelsTires from "@/public/portfolio/wheels-tires/wt1.jpg";
import ceramicCoatings from "@/public/portfolio/ceramic-coatings/cc7.jpg";
import fleet from "@/public/portfolio/fleet/f1.jpg";
import hitches from "@/public/portfolio/hitches/h1.jpg";
import undercoating from "@/public/portfolio/undercoating/u4.jpg";
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
			title: 'liner',
			img: '/portfolio/patriot-liner/main.jpg',
		},
		{
			id: uuidv4(),
			title: 'liner',
			img: '/portfolio/patriot-liner/main.jpg',
		},
		{
			id: uuidv4(),
			title: 'liner',
			img: '/portfolio/patriot-liner/main.jpg',
		},
		{
			id: uuidv4(),
			title: 'liner',
			img: '/portfolio/patriot-liner/main.jpg',
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
