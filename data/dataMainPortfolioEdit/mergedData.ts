import {projectsData} from "@/data/dataMainPortfolioEdit/projectsData";
import {carDataEdit} from "@/data/dataMainPortfolioEdit/carDataEdit";

export const mergedData = projectsData.map(project => {
    const matchingCarData = carDataEdit.find(carProject => carProject.id === project.id);

    if (matchingCarData) {
        // Об'єднати проект з carDataEdit, якщо знайдено відповідний id
        return {
            ...project,
            carData: matchingCarData,
        };
    }

    // Якщо відповідного id не знайдено, повернути оригінальний проект
    return project;
});

console.log(mergedData);