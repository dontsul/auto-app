import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

interface GalleryImage {
    id: string;
    title: string;
    img: StaticImageData;
}

interface ProjectInfo {
    ClientHeading: string;
    CompanyInfo: { id: string; title: string; details: string }[];
    // Додайте інші властивості за потреби
}

interface CarProject {
    id: string;
    brand: string;
    img: StaticImageData;
    gallery: GalleryImage[];
    ProjectInfo: ProjectInfo;
    // Додайте інші властивості за потреби
}

interface FolderGalleryProps {
    id: number;
    img: CarProject[];
}

const FolderGallery: FC<FolderGalleryProps> = (props) => {
    return (
        <div>
            {props.img.map((project) => (
                <div key={project.id}>
                    <Image
                        src={project.img.src}
                        className="rounded-t-xl border-none"
                        alt={project.brand}
                        layout="responsive"
                        width={100}
                        height={90}
                    />
                    <div className="text-center px-4 py-6">
                        <p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
                            {project.brand}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FolderGallery;

