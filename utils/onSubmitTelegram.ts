export const TELEGRAM_BOT_TOKEN = "6652666730:AAGEJi2jbmttBxkrc-f5jItmu4XJhqCQhm4";
export const TELEGRAM_CHAT_ID = "-1002128482422";
export const submitFormToTelegram = async (data: any, chatId: string, botToken: string) => {
    try {
        const message = `
Contact Information:
- Name: ${data.firstName}
- Last Name: ${data.lastName}
- Phone: ${data.phone}
- Email: ${data.email}

Car Information:
- Year: ${data.year}
- Make: ${data.make}
- Model: ${data.model}
- License Plate: ${data.licensePlate}
- State: ${data.state}

Services:
${data.services.map((service: string) => `- ${service}`).join('\n')}

Comments:
(${data.comment})
`;

        const formattedMessage = `<pre>${message}</pre>`;

        if (data.file && data.file.length > 0) {
            const photoArray = Array.from(data.file) as File[];

            const mediaGroup = photoArray.map((_, index: number) => ({
                type: 'photo',
                media: `attach://photo_${index}`,
                caption: index === 0 ? message : undefined,
            }));

            const formData = new FormData();
            formData.append('chat_id', chatId);
            formData.append('media', JSON.stringify(mediaGroup));

            photoArray.forEach((photo: File, index: number) => {
                formData.append(`photo_${index}`, photo, `photo_${index}`);
            });

            const photoResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMediaGroup`, {
                method: 'POST',
                body: formData,
            });

            if (!photoResponse.ok) {
                console.error('Error sending photos to Telegram:', photoResponse.statusText);
            } else {
                return { success: true };
            }
        } else {
            const textResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                body: new URLSearchParams({
                    'chat_id': chatId,
                    'text': formattedMessage,
                    'parse_mode': 'html',
                }),
            });

            if (!textResponse.ok) {
                console.error('Error sending text to Telegram:', textResponse.statusText);
            } else {
                return { success: true };
            }
        }

        return { success: false, error: 'Unknown error' };
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
        return { success: false, error: 'Unknown error' };
    }
};
