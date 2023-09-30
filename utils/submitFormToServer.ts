// submitFormToServer.ts

export const submitFormToServer = async ({ data }: { data: FormData }) => {
    const URL_SERVER = "http://localhost:4000/";

    try {
        const response = await fetch(`${URL_SERVER}/submit-form`, {
            method: 'POST',
            body: data,
        });

        const result = await response.json();

        return { success: response.ok, ...result };
    } catch (error) {
        console.error('Error submitting form to server:', error);
        return { success: false, error: 'Error submitting form to server' };
    }
};
