import { v4 as uuidv4 } from 'uuid';

import ceramicCoatings from "@/public/portfolio/ceramic-coatings/cc1.jpg";
import ceramicCoatings1 from "@/public/portfolio/ceramic-coatings/cc2.jpg";
import ceramicCoatings2 from "@/public/portfolio/ceramic-coatings/cc3.jpg";
import ceramicCoatings3 from "@/public/portfolio/ceramic-coatings/cc4.jpg";
import ceramicCoatings4 from "@/public/portfolio/ceramic-coatings/cc5.jpg";
import ceramicCoatings5 from "@/public/portfolio/ceramic-coatings/cc6.jpg";
import ceramicCoatings6 from "@/public/portfolio/ceramic-coatings/cc7.jpg";
import ceramicCoatings7 from "@/public/portfolio/ceramic-coatings/cc8.jpg";


import fleet1 from "@/public/portfolio/fleet/f1.jpg";
import fleet2 from "@/public/portfolio/fleet/f2.jpg";
import fleet3 from "@/public/portfolio/fleet/f3.jpg";
import fleet4 from "@/public/portfolio/fleet/f4.jpg";
import fleet5 from "@/public/portfolio/fleet/f5.jpg";
import fleet6 from "@/public/portfolio/fleet/f6.jpg";

import hitches1 from "@/public/portfolio/hitches/h1.jpg";
import hitches2 from "@/public/portfolio/hitches/h2.jpg";
import hitches3 from "@/public/portfolio/hitches/h3.jpg";
import hitches4 from "@/public/portfolio/hitches/h4.jpg";
import hitches5 from "@/public/portfolio/hitches/h5.jpg";
import hitches6 from "@/public/portfolio/hitches/h6.jpg";
import hitches7 from "@/public/portfolio/hitches/h7.jpg";
import hitches8 from "@/public/portfolio/hitches/h8.jpg";
import hitches9 from "@/public/portfolio/hitches/h9.jpg";
import hitches10 from "@/public/portfolio/hitches/h10.jpg";
import hitches11 from "@/public/portfolio/hitches/h11.jpg";
import hitches12 from "@/public/portfolio/hitches/h12.jpg";
import hitches13 from "@/public/portfolio/hitches/h13.jpg";

import patriotLiner1 from "@/public/portfolio/patriot-liner/pl1.jpg";
import patriotLiner2 from "@/public/portfolio/patriot-liner/pl2.jpg";
import patriotLiner3 from "@/public/portfolio/patriot-liner/pl3.jpg";
import patriotLiner4 from "@/public/portfolio/patriot-liner/pl4.jpg";
import patriotLiner5 from "@/public/portfolio/patriot-liner/pl5.jpg";
import patriotLiner6 from "@/public/portfolio/patriot-liner/pl6.jpg";
import patriotLiner7 from "@/public/portfolio/patriot-liner/pl7.jpg";
import patriotLiner8 from "@/public/portfolio/patriot-liner/pl8.jpg";
import patriotLiner9 from "@/public/portfolio/patriot-liner/pl9.jpg";
import patriotLiner10 from "@/public/portfolio/patriot-liner/pl10.jpg";
import patriotLiner11 from "@/public/portfolio/patriot-liner/pl11.jpg";
import patriotLiner12 from "@/public/portfolio/patriot-liner/pl12.jpg";


import undercoating1 from "@/public/portfolio/undercoating/u1.jpg";
import undercoating2 from "@/public/portfolio/undercoating/u2.jpg";
import undercoating3 from "@/public/portfolio/undercoating/u3.jpg";
import undercoating4 from "@/public/portfolio/undercoating/u4.jpg";

import wheelsTires from "@/public/portfolio/wheels-tires/wt1.jpg";
import wheelsTires1 from "@/public/portfolio/wheels-tires/wt2.jpg";
import wheelsTires2 from "@/public/portfolio/wheels-tires/wt3.jpg";
import wheelsTires3 from "@/public/portfolio/wheels-tires/wt4.jpg";
import wheelsTires4 from "@/public/portfolio/wheels-tires/wt5.jpg";
import wheelsTires5 from "@/public/portfolio/wheels-tires/wt6.jpg";
import wheelsTires6 from "@/public/portfolio/wheels-tires/wt7.jpg";

export const projectsData = [
	{
		id: 1,
		title: 'Ceramic Coatings',
		category: 'CERAMIC-COATINGS',
		img: ceramicCoatings,
		ProjectHeader: {
			title: 'Ceramic Coatings',
			tags: 'Ceramic Coatings',
		},
		cars: [
			{
				id: uuidv4(),
				idCar: 10,
				brand: 'TEST CAR',
				img: ceramicCoatings1,
				gallery: [
					{
						id: uuidv4(),
						title: 'TEST CAR',
						img: ceramicCoatings2,
					},
					{
						id: uuidv4(),
						title:'TEST CAR',
						img: ceramicCoatings3,
					},
					{
						id: uuidv4(),
						title: 'TEST CAR',
						img: ceramicCoatings7,
					},

				],
				ProjectInfo: {
					ClientHeading: 'TEST CAR TEST',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'TEST CAR TEST',
					ObjectivesDetails:
						'TEST',
					Technologies: [
						{
							title: 'GDFHFJFJ',
							techs: [
								'TEST',

								'TEST',

								'TEST',

								'TEST',
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'TEST',
						},
						{
							id: uuidv4(),
							details:
								'TEST',
						}
					],

				},

			},
			{
				id: uuidv4(),
				idCar: 11,
				brand: 'TEST CAR 2',
				img: patriotLiner12,
				gallery: [
					{
						id: uuidv4(),
						title: 'TEST CAR 2',
						img: patriotLiner12,
					},
					{
						id: uuidv4(),
						title: 'TEST CAR 2',
						img: patriotLiner6,
					},
				],
				ProjectInfo: {
					ClientHeading: 'sdf',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'sdf',
					ObjectivesDetails:
						'Discover the ultimate car body protection with System X®, one of the finest and most durable ceramic coatings originally designed for the aviation industry, trusted by renowned names like Sikorsky, Bombardier, and leading international airlines. This revolutionary nano-ceramic breakthrough has paved the way for a comprehensive line of products.',
					Technologies: [
						{
							title: 'With its exceptional hydrophobic properties, System X® offers:',
							techs: [
								'•The ability to repel dirt, water, dust, and debris, keeping the surface immaculate.',

								'•Effective prevention of car body corrosion.',

								'•Impressive protection against external elements, unaffected by washing or detailing.',

								'•A noticeable reduction in the frequency of washing and detailing required.',
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},

			},
		],
	},
	{
		id: 2,
		title: 'test',
		category: 'test',
		img: fleet1,
		ProjectHeader: {
			title: 'test',
			tags: 'test',
		},
		cars: [
			{
				id: uuidv4(),
				idCar: 12,
				brand: 'BMW',
				img: fleet1,
				gallery: [
					{
						id: uuidv4(),
						title: 'fsd',
						img: fleet1,
					},
					{
						id: uuidv4(),
						title:'fsd',
						img: fleet4,
					},


				],
				ProjectInfo: {
					ClientHeading: 'sdf',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'sdf',
					ObjectivesDetails:
						'Discover the ultimate car body protection with System X®, one of the finest and most durable ceramic coatings originally designed for the aviation industry, trusted by renowned names like Sikorsky, Bombardier, and leading international airlines. This revolutionary nano-ceramic breakthrough has paved the way for a comprehensive line of products.',
					Technologies: [
						{
							title: 'With its exceptional hydrophobic properties, System X® offers:',
							techs: [
								'•The ability to repel dirt, water, dust, and debris, keeping the surface immaculate.',

								'•Effective prevention of car body corrosion.',

								'•Impressive protection against external elements, unaffected by washing or detailing.',

								'•A noticeable reduction in the frequency of washing and detailing required.',
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},

			},
			// Додайте інші авто для Ceramic Coatings
		],
	},
];
