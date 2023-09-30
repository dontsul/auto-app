import {submitFormToServer} from "@/utils/submitFormToServer";

export const submitFormEmail = async (data: any) => {
    try {
        const formData = new FormData();
        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName);
        formData.append("phone", data.phone);
        formData.append("email", data.email);
        formData.append("comment", data.comment);
        formData.append("year", data.year);
        formData.append("make", data.make);
        formData.append("model", data.model);
        formData.append("licensePlate", data.licensePlate);
        formData.append("state", data.state);
        data.services.forEach((service: string) =>
            formData.append("services", service)
        );

        Object.values(data.file).forEach((f, i) => {
            formData.append(`file`, data.file[i]);
        });

        const response = await submitFormToServer({ data: formData });

        return response;
    } catch (error) {
        console.error('Error submitting the form:', error);
        throw error;
    }
};

// const onSubmit = handleSubmit((data: any) => {
//     const formData = new FormData();
//     formData.append("firstName", data.firstName);
//     formData.append("lastName", data.lastName);
//     formData.append("phone", data.phone);
//     formData.append("email", data.email);
//     formData.append("comment", data.comment);
//     formData.append("year", data.year);
//     formData.append("make", data.make);
//     formData.append("model", data.model);
//     formData.append("licensePlate", data.licensePlate);
//     formData.append("state", data.state);
//     data.services.forEach((service: string) =>
//         formData.append("services", service)
//     );
//
//     Object.values(data.file).forEach((f, i) => {
//         formData.append(`file`, data.file[i]);
//     });
//     console.log(data);
//
//     fetch(`${URL_SERVER}api/form`, {
//         method: "POST",
//         body: formData,
//     })
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             reset();
//             toast.success(data.message, {
//                 duration: 3000,
//             });
//         })
//         .catch((e) => {
//             toast.error("This didn't work.");
//         });
// });