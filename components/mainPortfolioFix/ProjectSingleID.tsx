'use client'
import { FC, useState, useCallback, useEffect } from 'react';
import { FiX, FiChevronLeft, FiChevronRight, FiTag } from 'react-icons/fi';
import Image, { StaticImageData } from 'next/image';



interface ProjectSingleCar {
    brand: string;
    gallery: Array<{ id: string; title: string; img: StaticImageData }>;
    ProjectInfo: {
        CompanyInfo: Array<{ id: string; title: string; details: string }>;
        ObjectivesHeading: string;
        ObjectivesDetails: string;
        Technologies: Array<{ title: string; techs: string[] }>;
    };
}

interface ProjectSingleIdProps {
    project: {
        id: number;
        title: string;
        ProjectHeader: {
            tags: string;
        };
        cars: ProjectSingleCar[];
    };
    carIndex: number; // Added prop to determine which car to display
}

interface ProjectSingleCarGalleryProps {
    gallery: Array<{ id: string; title: string; img: StaticImageData }>;
}

const ProjectSingleId: FC<ProjectSingleIdProps & ProjectSingleCarGalleryProps> = ({ project, gallery, carIndex }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentCarIndex, setCurrentCarIndex] = useState(carIndex);

    const closeModal = useCallback(() => {
        setModalOpen(false);
    }, []);

    const openModal = useCallback((imageIndex: number) => {
        setCurrentImageIndex(imageIndex);
        setModalOpen(true);
    }, []);

    const goToNext = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1 < gallery.length ? prevIndex + 1 : prevIndex));
    }, [gallery]);

    const goToPrev = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    }, []);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (modalOpen) {
            if (e.key === 'Escape') {
                closeModal();
            }
            if (e.key === 'ArrowRight') {
                goToNext();
            }
            if (e.key === 'ArrowLeft') {
                goToPrev();
            }
        }
    }, [modalOpen, closeModal, goToNext, goToPrev]);

    const handleClickOutside = useCallback((e: MouseEvent) => {
        const modal = document.getElementById('modal');
        if (modal && !modal.contains(e.target as Node)) {
            closeModal();
        }
    }, [closeModal]);

    useEffect(() => {
        if (modalOpen) {
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('click', handleClickOutside);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('click', handleClickOutside);
        };
    }, [modalOpen, handleKeyDown, handleClickOutside]);


    return (
        <div className="container mx-auto">
            <div key={project?.id}>
                <p className=" text-left text-3xl sm:text-4xl  text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
                    {project?.title}: {project?.cars[currentCarIndex]?.brand}

                </p>
                <div className="flex">
                    <div className="flex items-center mr-10">
                        <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
                        <span className=" ml-2 leading-none text-primary-dark dark:text-primary-light">
             {project?.cars[currentCarIndex]?.brand}
            </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
                    {gallery.map((image, imageIndex) => (
                        <div className="mb-10 sm:mb-0" key={image.id}>
                            <Image
                                src={image.img}
                                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                                alt={image.title}
                                layout="responsive"
                                width={100}
                                height={100}
                                onClick={() => openModal(imageIndex)}
                            />
                        </div>
                    ))}
                </div>

                {modalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-40 safari-center">
                        <button className="absolute top-4 right-4 text-white bg-black px-4 py-2 rounded-md" onClick={closeModal}>
                            <FiX className="w-10 h-10" />
                        </button>
                        <div className="absolute z-20 max-w-screen-lg">

                            <div className="rounded-xl overflow-hidden aspect-w-4 aspect-h-3 cursor-pointer shadow-lg sm:shadow-none">
                                <Image
                                    src={gallery[currentImageIndex]?.img || ''}
                                    className="object-cover w-full h-full"
                                    alt={gallery[currentImageIndex]?.title || ''}
                                    layout="responsive"
                                    placeholder="empty"
                                    width={800}
                                    height={600}
                                />
                            </div>
                        </div>
                        <button
                            className="absolute z-50 top-1/2 left-4 transform -translate-y-1/2 text-white bg-black px-4 py-2 rounded-md flex items-center"
                            onClick={goToPrev}
                        >
                            <FiChevronLeft className="w-10 h-10" />
                        </button>
                        <button
                            className="absolute z-50 top-1/2 right-4 transform -translate-y-1/2 text-white bg-black px-4 py-2 rounded-md flex items-center"
                            onClick={goToNext}
                        >
                            <FiChevronRight className="w-10 h-10" />
                        </button>
                    </div>
                )}
            </div>
            <div className="block sm:flex gap-0 sm:gap-10 mt-14">
                <div className="w-full sm:w-1/3 text-left">
                    <div className="mb-7">
                        <p className=" text-2xl  text-secondary-dark dark:text-secondary-light mb-2">
                            {project?.title}: {project?.cars[currentCarIndex]?.brand}
                        </p>
                        <ul className="leading-loose">
                            {project?.cars[currentCarIndex]?.ProjectInfo.CompanyInfo.map((company) => (
                                <li className="font-general-regular text-ternary-dark dark:text-ternary-light" key={company.id}>
                                    <span>{company.title}:   </span>
                                    {company.title === 'Phone' ? (
                                        <a
                                            className=" hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                                            href={`tel:${company.details}`}
                                            aria-label={company.title}
                                        >
                                            {company.details}
                                        </a>
                                    ) : (
                                        // <Link
                                        //     className="hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                                        //     href={`/about`}
                                        // >
                                        <span> {company.details}</span>
                                        // </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-primary-dark dark:text-primary-light text-2xl  mb-7">
                            Methods & Techniques
                        </p>
                        {project?.cars[currentCarIndex]?.ProjectInfo.Technologies.map((techItem, techIndex) => (
                            <div key={techIndex}>

                                <p className=" p-1 font-general-regular text-primary-dark dark:text-ternary-light">{techItem.title}:</p>
                                {techItem.techs.map((tech, subTechIndex) => (
                                    <p className=" p-1 font-normal	text-gray-600" key={subTechIndex}>
                                        {tech}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
                    <div className="mb-7">
                        <p className=" text-2xl  text-ternary-dark dark:text-ternary-light mb-2">
                            {/*{project?.cars[currentCarIndex]?.ProjectInfo.ObjectivesHeading}*/}
                            {/*{project?.cars[currentCarIndex]?.brand}*/}
                            {/*{project?.title}: {project?.cars[currentCarIndex]?.brand}*/}
                            info: {project?.cars[currentCarIndex]?.brand}


                        </p>
                        <p className=" text-primary-dark dark:text-ternary-light">
                            {project?.cars[currentCarIndex]?.ProjectInfo.ObjectivesDetails}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProjectSingleId;
