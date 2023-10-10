'use client'
import {FC, useCallback, useEffect, useState} from 'react';
import {FiChevronLeft, FiChevronRight, FiTag, FiX} from 'react-icons/fi';
import Image from 'next/image';
import { projectsData } from '@/data/dataMainPortfolioEdit/projectsData';

interface IProjectSingleIdProps {
    idProject: number;
}

const ProjectSingleId: FC<IProjectSingleIdProps> = (props) => {
    const project = projectsData.find((project) => project.id === Number(props.idProject));

    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const closeModal = useCallback(() => {
        setModalOpen(false);
    }, []);

    const [currentCarIndex, setCurrentCarIndex] = useState(0);


    const openModal = (carIndex: number, imageIndex: number) => {
        setCurrentCarIndex(carIndex);
        setCurrentImageIndex(imageIndex);
        setModalOpen(true);
    };

    const goToNext = useCallback(() => {
        setCurrentImageIndex((prevIndex) => {
            const currentCarGalleryLength = project?.cars[currentCarIndex]?.gallery.length || 1;

            if (prevIndex + 1 < currentCarGalleryLength) {
                return prevIndex + 1;
            } else {
                // Check if there is a next car
                if (currentCarIndex + 1 < (project?.cars.length || 1)) {
                    setCurrentCarIndex((prevCarIndex) => prevCarIndex + 1);
                    return 0; // Start from the first image of the next car
                } else {
                    // Stay on the last image if there is no next car or current car gallery is at the end
                    setCurrentCarIndex(0); // Reset car index to the first car
                    return 0;
                }
            }
        });
    }, [project?.cars, currentCarIndex]);

    const goToPrev = useCallback(() => {
        setCurrentImageIndex((prevIndex) => {
            if (prevIndex > 0) {
                return prevIndex - 1;
            } else {
                // Check if there is a previous car
                if (currentCarIndex - 1 >= 0) {
                    setCurrentCarIndex((prevCarIndex) => prevCarIndex - 1);
                    const lastCarGalleryLength = project?.cars[currentCarIndex - 1]?.gallery.length || 1;
                    return lastCarGalleryLength - 1; // Start from the last image of the previous car
                } else {
                    // Stay on the first image if there is no previous car or current car gallery is at the beginning
                    setCurrentCarIndex((project?.cars.length || 1) - 1); // Set car index to the last car
                    const lastCarGalleryLength = project?.cars[(project?.cars.length || 1) - 1]?.gallery.length || 1;
                    return lastCarGalleryLength - 1; // Start from the last image of the last car
                }
            }
        });
    }, [project?.cars, currentCarIndex]);



    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (modalOpen) {
            // Close modal on Escape key press
            if (e.key === 'Escape') {
                closeModal();
            }
            // Navigate images with arrow keys
            if (e.key === 'ArrowRight') {
                goToNext();
            }
            if (e.key === 'ArrowLeft') {
                goToPrev();
            }
        }
    }, [modalOpen, closeModal, goToNext, goToPrev]);

    const handleClickOutside = useCallback((e: MouseEvent) => {
        const modal = document.getElementById('modal'); // Replace with your actual modal ID
        if (modal && !modal.contains(e.target as Node)) {
            closeModal();
        }
    }, [closeModal]);

    useEffect(() => {
        console.log('Attaching event listeners...');
        // Attach event listeners when modal is open
        if (modalOpen) {
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('click', handleClickOutside);
        }

        // Detach event listeners when modal is closed
        return () => {
            console.log('Detaching event listeners...');
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('click', handleClickOutside);
        };
    }, [modalOpen, handleKeyDown, handleClickOutside]);

    return (
        <div className="container mx-auto">
            <div key={project?.id}>
                <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
                    {project?.title}
                </p>
                <div className="flex">
                    <div className="flex items-center mr-10">
                        {/*<FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />*/}
                        {/*<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">*/}
                        {/*    {project.ProjectInfo.ProjectDetails}*/}
                        {/*</span>*/}
                    </div>
                    <div className="flex items-center">
                        <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
                        <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                                {project?.ProjectHeader.tags}
                            </span>
                    </div>

                </div>
                {/* Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
                    {project?.cars[currentCarIndex]?.gallery.map((image, imageIndex) => (
                        <div className="mb-10 sm:mb-0" key={image.id}>
                            <Image
                                src={image.img}
                                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                                alt={image.title}
                                layout="responsive"
                                width={100}
                                height={90}
                                onClick={() => openModal(currentCarIndex, imageIndex)}
                            />
                        </div>
                    ))}
                </div>


                {modalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-40">

                        <div className="absolute z-20 max-w-screen-lg">
                            <button
                                className="absolute top-4 right-4 text-white bg-black px-4 py-2 rounded-md"
                                onClick={closeModal}
                            >
                                <FiX className="w-4 h-4" />
                            </button>
                            <div className="  rounded-xl overflow-hidden aspect-w-4 aspect-h-3 cursor-pointer shadow-lg sm:shadow-none">
                                <Image
                                    src={project?.cars[currentCarIndex]?.gallery[currentImageIndex]?.img || ''}
                                    className="object-cover w-full h-full"
                                    alt={project?.cars[currentCarIndex]?.gallery[currentImageIndex]?.title || ''}
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
                            <FiChevronLeft className="w-4 h-4" /> {/* Use the left arrow icon */}
                        </button>

                        <button
                            className="absolute z-50 top-1/2 right-4 transform -translate-y-1/2 text-white bg-black px-4 py-2 rounded-md flex items-center"
                            onClick={goToNext}
                        >
                            <FiChevronRight className="w-4 h-4" /> {/* Use the right arrow icon */}
                        </button>
                    </div>
                )}

            </div>
            <div className="block sm:flex gap-0 sm:gap-10 mt-14">
                <div className="w-full sm:w-1/3 text-left">
                    {/* Single project client details */}
                    <div className="mb-7">
                        <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
                            {project?.cars[currentCarIndex]?.brand} {/* Виведіть бренд конкретного авто */}
                        </p>
                        <ul className="leading-loose">
                            {project?.cars[currentCarIndex]?.ProjectInfo.CompanyInfo.map(
                                (company, index) => {
                                    return (
                                        <li
                                            className="font-general-regular text-ternary-dark dark:text-ternary-light"
                                            key={company.id}
                                        >
                                            <span>{company.title}: </span>
                                            {company.title === 'Phone' ? (
                                                <a
                                                    className="hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                                                    href={`tel:${company.details}`}
                                                    aria-label={company.title}
                                                >
                                                    {company.details}
                                                </a>
                                            ) : (
                                                <span>{company.details}</span>
                                            )}
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                    </div>
                    {/* Single project objectives */}
                    <div className="mb-7">
                        <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                            {project?.cars[currentCarIndex]?.ProjectInfo.ObjectivesHeading} {/* Виведіть заголовок цілей конкретного авто */}
                        </p>
                        <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                            {project?.cars[currentCarIndex]?.ProjectInfo.ObjectivesDetails} {/* Виведіть опис цілей конкретного авто */}
                        </p>
                    </div>

                    {/* Single project technologies */}
                    <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
                        <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                            Technologies
                        </p>
                        {project?.cars[currentCarIndex]?.ProjectInfo.Technologies.map(
                            (techItem, techIndex) => {
                                return (
                                    <p className=" font-general-regular text-primary-dark dark:text-ternary-light"
                                    key={techIndex}>
                                        {techItem.title}:

                                            {techItem.techs.map((tech, subTechIndex) => (
                                                <p className=" font-general-regular text-primary-dark dark:text-ternary-light" key={subTechIndex}>{tech}</p>
                                            ))}

                                    </p>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSingleId;
