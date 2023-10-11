'use client'
import { FC, useState, useCallback, useEffect } from 'react';
import { FiX, FiChevronLeft, FiChevronRight, FiTag } from 'react-icons/fi';
import Image, { StaticImageData } from 'next/image';

interface ProjectSingleCar {
    idCar: number;
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
}

interface ProjectSingleCarGalleryProps {
    gallery: Array<{ id: string; title: string; img: StaticImageData }>;
}
const ProjectSingleId: FC<ProjectSingleIdProps & ProjectSingleCarGalleryProps> = ({ project, gallery }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentCarIndex, setCurrentCarIndex] = useState(0);

    const closeModal = useCallback(() => {
        setModalOpen(false);
    }, []);

    const openModal = (carIndex: number, imageIndex: number) => {
        setCurrentCarIndex(carIndex);
        setCurrentImageIndex(imageIndex);
        setModalOpen(true);
    };

    const goToNext = useCallback(() => {
        setCurrentImageIndex((prevIndex) => {
            const currentCarGallery = gallery || [];
            const currentCarGalleryLength = currentCarGallery.length;

            if (prevIndex + 1 < currentCarGalleryLength) {
                return prevIndex + 1;
            } else {
                return prevIndex;
            }
        });
    }, [gallery]);

    const goToPrev = useCallback(() => {
        setCurrentImageIndex((prevIndex) => {
            if (prevIndex > 0) {
                return prevIndex - 1;
            } else {
                return prevIndex;
            }
        });
    }, []);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
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
        },
        [modalOpen, closeModal, goToNext, goToPrev]
    );

    const handleClickOutside = useCallback(
        (e: MouseEvent) => {
            const modal = document.getElementById('modal'); // Replace with your actual modal ID
            if (modal && !modal.contains(e.target as Node)) {
                closeModal();
            }
        },
        [closeModal]
    );

    useEffect(() => {
        console.log('Attaching event listeners...');
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
                        <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
                        <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {project?.ProjectHeader.tags}
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
                            <FiChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            className="absolute z-50 top-1/2 right-4 transform -translate-y-1/2 text-white bg-black px-4 py-2 rounded-md flex items-center"
                            onClick={goToNext}
                        >
                            <FiChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                )}

            </div>
            <div className="block sm:flex gap-0 sm:gap-10 mt-14">
                <div className="w-full sm:w-1/3 text-left">
                    <div className="mb-7">
                        <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
                            {project?.cars[currentCarIndex]?.brand}
                        </p>
                        <ul className="leading-loose">
                            {project?.cars[currentCarIndex]?.ProjectInfo.CompanyInfo.map((company) => (
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
                            ))}
                        </ul>
                    </div>
                    <div className="mb-7">
                        <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                            {project?.cars[currentCarIndex]?.ProjectInfo.ObjectivesHeading}
                        </p>
                        <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                            {project?.cars[currentCarIndex]?.ProjectInfo.ObjectivesDetails}
                        </p>
                    </div>
                    <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
                        <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                            Technologies
                        </p>
                        {project?.cars[currentCarIndex]?.ProjectInfo.Technologies.map((techItem, techIndex) => (
                            <div key={techIndex}>
                                <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                                    {techItem.title}:
                                </p>
                                {techItem.techs.map((tech, subTechIndex) => (
                                    <p
                                        className="font-general-regular text-primary-dark dark:text-ternary-light"
                                        key={subTechIndex}
                                    >
                                        {tech}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSingleId;

