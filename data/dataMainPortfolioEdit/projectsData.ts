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
import patriotLiner13 from "@/public/portfolio/patriot-liner/pl13.jpg";
import patriotLiner14 from "@/public/portfolio/patriot-liner/pl14.jpg";
import patriotLiner15 from "@/public/portfolio/patriot-liner/pl15.jpg";
import patriotLiner16 from "@/public/portfolio/patriot-liner/pl15.jpg";
import patriotLiner17 from "@/public/portfolio/patriot-liner/pl17.jpg";
import patriotLiner18 from "@/public/portfolio/patriot-liner/pl18.jpg";
import patriotLiner19 from "@/public/portfolio/patriot-liner/pl19.jpg";
import patriotLiner20 from "@/public/portfolio/patriot-liner/pl20.jpg";
import patriotLiner21 from "@/public/portfolio/patriot-liner/pl21.jpg";
import patriotLiner22 from "@/public/portfolio/patriot-liner/pl22.jpg";
import patriotLiner23 from "@/public/portfolio/patriot-liner/pl23.jpg";
import patriotLiner24 from "@/public/portfolio/patriot-liner/pl24.jpg";
import patriotLiner25 from "@/public/portfolio/patriot-liner/pl25.jpg";
import patriotLiner26 from "@/public/portfolio/patriot-liner/pl26.jpg";
import patriotLiner27 from "@/public/portfolio/patriot-liner/pl27.jpg";
import patriotLiner28 from "@/public/portfolio/patriot-liner/pl28.jpg";
import patriotLiner29 from "@/public/portfolio/patriot-liner/pl29.jpg";
import patriotLiner30 from "@/public/portfolio/patriot-liner/pl30.jpg";
import patriotLiner31 from "@/public/portfolio/patriot-liner/pl31.jpg";
import patriotLiner32 from "@/public/portfolio/patriot-liner/pl32.jpg";
import patriotLiner33 from "@/public/portfolio/patriot-liner/pl33.jpg";
import patriotLiner34 from "@/public/portfolio/patriot-liner/pl34.jpg";
import patriotLiner35 from "@/public/portfolio/patriot-liner/pl35.jpg";
import patriotLiner36 from "@/public/portfolio/patriot-liner/pl36.jpg";
import patriotLiner37 from "@/public/portfolio/patriot-liner/pl37.jpg";
import patriotLiner38 from "@/public/portfolio/patriot-liner/pl38.jpg";
import patriotLiner39 from "@/public/portfolio/patriot-liner/pl39.jpg";
import patriotLiner40 from "@/public/portfolio/patriot-liner/pl40.jpg";
import patriotLiner41 from "@/public/portfolio/patriot-liner/pl41.jpg";
import patriotLiner42 from "@/public/portfolio/patriot-liner/pl42.jpg";
import patriotLiner43 from "@/public/portfolio/patriot-liner/pl43.jpg";
import patriotLiner44 from "@/public/portfolio/patriot-liner/pl44.jpg";
import patriotLiner45 from "@/public/portfolio/patriot-liner/pl45.jpg";



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
				brand: 'mercedes-benz',
				img: ceramicCoatings,
				gallery: [
					{
						id: uuidv4(),
						title: 'mercedes-benz',
						img: ceramicCoatings,
					},
					{
						id: uuidv4(),
						title: 'mercedes-benz',
						img: ceramicCoatings1,
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
				brand: 'GMC',
				img: ceramicCoatings2,
				gallery: [
					{
						id: uuidv4(),
						title: 'GMC',
						img: ceramicCoatings2,
					},
					{
						id: uuidv4(),
						title: 'GMC',
						img: ceramicCoatings3,
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
			{
				id: uuidv4(),
				brand: 'Tesla',
				img: ceramicCoatings7,
				gallery: [
					{
						id: uuidv4(),
						title: 'Tesla',
						img: ceramicCoatings5,
					},
					{
						id: uuidv4(),
						title: 'Tesla',
						img: ceramicCoatings6,
					},
					{
						id: uuidv4(),
						title: 'Tesla',
						img: ceramicCoatings7,
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
		title: 'Fleet',
		category: 'FLEET',
		img: fleet1,
		ProjectHeader: {
			title: 'Fleet',
			tags: 'FLEET',
		},
		cars: [
			{
				id: uuidv4(),
				brand: 'Ford',
				img: fleet1,
				gallery: [
					{
						id: uuidv4(),
						title: 'Ford',
						img: fleet1,
					},
					{
						id: uuidv4(),
						title:'Ford',
						img: fleet2,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: fleet3,
					},
					{
						id: uuidv4(),
						title:'Ford',
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
	{
		id: 3,
		title: 'Hitches',
		category: 'HITCHES',
		img: hitches1,
		ProjectHeader: {
			title: 'Hitches',
			tags: 'Hitches',
		},
		cars: [
			{
				id: uuidv4(),
				brand: 'Ford Mustang',
				img: hitches1,
				gallery: [
					{
						id: uuidv4(),
						title: 'Ford Mustang',
						img: hitches1,
					},
					{
						id: uuidv4(),
						title:'Ford Mustang',
						img: hitches2,
					},
					{
						id: uuidv4(),
						title:'Ford Mustang',
						img: hitches3,
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
			{
				id: uuidv4(),
				brand: 'Audi',
				img: hitches4,
				gallery: [
					{
						id: uuidv4(),
						title: 'Audi',
						img: hitches4,
					},
					{
						id: uuidv4(),
						title:'Audi',
						img: hitches5,
					},
					{
						id: uuidv4(),
						title:'Audi',
						img: hitches6,
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
			{
				id: uuidv4(),
				brand: 'Tesla',
				img: hitches7,
				gallery: [
					{
						id: uuidv4(),
						title: 'Tesla',
						img: hitches7,
					},
					{
						id: uuidv4(),
						title:'Tesla',
						img: hitches8,
					},
					{
						id: uuidv4(),
						title:'Tesla',
						img: hitches11,
					},
					{
						id: uuidv4(),
						title:'Tesla',
						img: hitches12,
					},

				],
				ProjectInfo: {
					ClientHeading: 'Tesla',
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
	{
		id: 4,
		title: 'Patriot Liner',
		category: 'PATRIOT LINER',
		img: patriotLiner27,
		ProjectHeader: {
			title: 'test',
			tags: 'test',
		},
		cars: [
			{
				id: uuidv4(),
				brand: 'Jeep Wrangler',
				img: patriotLiner27,
				gallery: [
					{
						id: uuidv4(),
						title: 'Jeep',
						img: patriotLiner27,
					},
					{
						id: uuidv4(),
						title:'Jeep',
						img: patriotLiner28,
					},
					{
						id: uuidv4(),
						title: 'Jeep',
						img: patriotLiner29,
					},
					{
						id: uuidv4(),
						title:'Jeep',
						img: patriotLiner30,
					},
					{
						id: uuidv4(),
						title: 'Jeep',
						img: patriotLiner31,
					},
					{
						id: uuidv4(),
						title:'Jeep',
						img: patriotLiner32,
					},
					{
						id: uuidv4(),
						title: 'Jeep',
						img: patriotLiner33,
					},
					{
						id: uuidv4(),
						title:'Jeep',
						img: patriotLiner34,
					},
					{
						id: uuidv4(),
						title:'Jeep',
						img: patriotLiner35,
					},
					{
						id: uuidv4(),
						title:'Jeep',
						img: patriotLiner36,
					},
					{
						id: uuidv4(),
						title:'Jeep',
						img: patriotLiner37,
					},
					{
						id: uuidv4(),
						title:'Jeep',
						img: patriotLiner38,
					},
					{
						id: uuidv4(),
						title:'Jeep',
						img: patriotLiner39,
					},
					{
						id: uuidv4(),
						title:'Jeep',
						img: patriotLiner40,
					},
					{
						id: uuidv4(),
						title:'Jeep',
						img: patriotLiner41,
					},
					{
						id: uuidv4(),
						title:'Jeep',
						img: patriotLiner42,
					},
					{
						id: uuidv4(),
						title:'Jeep',
						img: patriotLiner43,
					},
					{
						id: uuidv4(),
						title:'Jeep',
						img: patriotLiner44,
					},
					{
						id: uuidv4(),
						title:'Jeep',
						img: patriotLiner45,
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
			// {
			// 	id: uuidv4(),
			// 	brand: 'Ford',
			// 	img: patriotLiner1,
			// 	gallery: [
			// 		{
			// 			id: uuidv4(),
			// 			title: 'Ford',
			// 			img: patriotLiner1,
			// 		},
			// 		{
			// 			id: uuidv4(),
			// 			title:'Ford',
			// 			img: patriotLiner2,
			// 		},
			// 	],
			// 	ProjectInfo: {
			// 		ClientHeading: 'Ford',
			// 		CompanyInfo: [
			// 			{
			// 				id: uuidv4(),
			// 				title: 'Company',
			// 				details: 'CAPITAL UPFITTERS',
			// 			},
			// 			{
			// 				id: uuidv4(),
			// 				title: 'Services',
			// 				details: 'Ceramic Coatings',
			// 			},
			// 			{
			// 				id: uuidv4(),
			// 				title: 'Phone',
			// 				details: '301-304-1419',
			// 			},
			// 		],
			// 		ObjectivesHeading:'sdf',
			// 		ObjectivesDetails:
			// 			'Discover the ultimate car body protection with System X®, one of the finest and most durable ceramic coatings originally designed for the aviation industry, trusted by renowned names like Sikorsky, Bombardier, and leading international airlines. This revolutionary nano-ceramic breakthrough has paved the way for a comprehensive line of products.',
			// 		Technologies: [
			// 			{
			// 				title: 'With its exceptional hydrophobic properties, System X® offers:',
			// 				techs: [
			// 					'•The ability to repel dirt, water, dust, and debris, keeping the surface immaculate.',
			//
			// 					'•Effective prevention of car body corrosion.',
			//
			// 					'•Impressive protection against external elements, unaffected by washing or detailing.',
			//
			// 					'•A noticeable reduction in the frequency of washing and detailing required.',
			// 				],
			// 			},
			// 		],
			// 		ProjectDetailsHeading: 'Why us',
			// 		ProjectDetails: [
			// 			{
			// 				id: uuidv4(),
			// 				details:
			// 					'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
			// 			},
			// 			{
			// 				id: uuidv4(),
			// 				details:
			// 					'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
			// 			}
			// 		],
			//
			// 	},
			//
			// },
			// {
			// 	id: uuidv4(),
			// 	brand: 'Ford',
			// 	img: patriotLiner3,
			// 	gallery: [
			// 		{
			// 			id: uuidv4(),
			// 			title: 'Ford',
			// 			img: patriotLiner3,
			// 		},
			// 	],
			// 	ProjectInfo: {
			// 		ClientHeading: 'Ford',
			// 		CompanyInfo: [
			// 			{
			// 				id: uuidv4(),
			// 				title: 'Company',
			// 				details: 'CAPITAL UPFITTERS',
			// 			},
			// 			{
			// 				id: uuidv4(),
			// 				title: 'Services',
			// 				details: 'Ceramic Coatings',
			// 			},
			// 			{
			// 				id: uuidv4(),
			// 				title: 'Phone',
			// 				details: '301-304-1419',
			// 			},
			// 		],
			// 		ObjectivesHeading:'sdf',
			// 		ObjectivesDetails:
			// 			'Discover the ultimate car body protection with System X®, one of the finest and most durable ceramic coatings originally designed for the aviation industry, trusted by renowned names like Sikorsky, Bombardier, and leading international airlines. This revolutionary nano-ceramic breakthrough has paved the way for a comprehensive line of products.',
			// 		Technologies: [
			// 			{
			// 				title: 'With its exceptional hydrophobic properties, System X® offers:',
			// 				techs: [
			// 					'•The ability to repel dirt, water, dust, and debris, keeping the surface immaculate.',
			//
			// 					'•Effective prevention of car body corrosion.',
			//
			// 					'•Impressive protection against external elements, unaffected by washing or detailing.',
			//
			// 					'•A noticeable reduction in the frequency of washing and detailing required.',
			// 				],
			// 			},
			// 		],
			// 		ProjectDetailsHeading: 'Why us',
			// 		ProjectDetails: [
			// 			{
			// 				id: uuidv4(),
			// 				details:
			// 					'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
			// 			},
			// 			{
			// 				id: uuidv4(),
			// 				details:
			// 					'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
			// 			}
			// 		],
			//
			// 	},
			//
			// },
			{
				id: uuidv4(),
				brand: 'Ford',
				img: patriotLiner4,
				gallery: [
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner4,
					},

					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner6,
					},

					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner8,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner9,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner10,
					},

					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner12,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner13,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner14,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner15,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner16,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner21,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner22,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner23,
					},

				],
				ProjectInfo: {
					ClientHeading: 'Ford',
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
			{
				id: uuidv4(),
				brand: 'Ford',
				img: patriotLiner4,
				gallery: [
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner4,
					},

					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner6,
					},

					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner8,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner9,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner10,
					},

					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner12,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner13,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner14,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner15,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner16,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner21,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner22,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner23,
					},

				],
				ProjectInfo: {
					ClientHeading: 'Ford',
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
			{
				id: uuidv4(),
				brand: 'Ford',
				img: patriotLiner17,
				gallery: [
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner17,
					},

					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner19,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner25,
					},
					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner18,
					},

					{
						id: uuidv4(),
						title: 'Ford',
						img: patriotLiner24,
					},

				],
				ProjectInfo: {
					ClientHeading: 'Ford',
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
	{
		id: 5,
		title: 'Undercoating',
		category: 'UNDERCOATING',
		img: undercoating3,
		ProjectHeader: {
			title: 'test',
			tags: 'test',
		},
		cars: [
			{
				id: uuidv4(),
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
	{
		id: 6,
		title: 'Wheels Tires',
		category: 'WHEELS TIRES',
		img: wheelsTires1,
		ProjectHeader: {
			title: 'test',
			tags: 'test',
		},
		cars: [
			{
				id: uuidv4(),
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
