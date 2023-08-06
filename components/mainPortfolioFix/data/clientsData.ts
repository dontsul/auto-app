import { v4 as uuidv4 } from 'uuid';
import Image, {StaticImageData} from 'next/image';

// Import images
import CanonImage from "../../../public/images/aboutSection.png";
import PumaImage from "../../../public/images/aboutSection.png";
import patriotLiner from "@/public/portfolio/patriot-liner/main.jpg";
import wheelsTires from "@/public/portfolio/wheels-tires/wt1.jpg";
import ceramicCoatings from "@/public/portfolio/ceramic-coatings/cc7.jpg";
import fleet from "@/public/portfolio/fleet/f1.jpg";
import hitches from "@/public/portfolio/hitches/h1.jpg";
import undercoating from "@/public/portfolio/undercoating/u4.jpg";
interface ClientDataItem {
	id: string;
	title: string;
	img: StaticImageData;
}

export const clientsHeading: string = 'Some of the brands I worked with';

export const clientsData: ClientDataItem[] = [
	{
		id: uuidv4(),
		title: 'patriot Liner',
		img: patriotLiner,
	},
	{
		id: uuidv4(),
		title: 'wheels Tires',
		img: wheelsTires,
	},
	{
		id: uuidv4(),
		title: 'ceramic Coatings',
		img: ceramicCoatings,
	},
	{
		id: uuidv4(),
		title: 'fleet',

		img: fleet,
	},
	{
		id: uuidv4(),
		title: 'hitches',
		img: hitches,
	},
	{
		id: uuidv4(),
		title: 'undercoating',
		img: undercoating,
	},
	{
		id: uuidv4(),
		title: 'Canon Image',

		img: CanonImage,
	},
	{
		id: uuidv4(),
		title: 'Puma Image',
		img: PumaImage,
	},
];
