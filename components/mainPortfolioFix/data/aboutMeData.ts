import { v4 as uuidv4 } from 'uuid';

interface AboutMeItem {
	id: string;
	bio: string;
}

export const aboutMeData: AboutMeItem[] = [
	{
		id: uuidv4(),
		bio: 'TEST test test',

	},
	{
		id: uuidv4(),
		bio: 'TEST test test',
	},
];
