// const sendTelegramMessage = async (
//     data: {
//         firstName: string;
//         lastName: string;
//         phone: string;
//         email: string;
//         year: string;
//         make: string;
//         model: string;
//         licensePlate?: string;
//         state?: string;
//         services: string[];
//         comment: string;
//         file?: File[];
//     },
//     botToken: string,
//     chatId: string
// ): Promise<boolean> => {
//     try {
//         const message = `
//       Contact Details:
//       -First Name: ${data.firstName}
//       -Last Name: ${data.lastName}
//       -Phone: ${data.phone}
//       -Email: ${data.email}
//
//       Vehicle Information:
//       -Year: ${data.year}
//       -Make: ${data.make}
//       -Model: ${data.model}
//       -License Plate: ${data.licensePlate || ""}
//       -State: ${data.state || ""}
//
//       Services:
//       ${data.services.map((service) => `- ${service}`).join('\n')}
//
//       Comments:
//       (${data.comment})
//
//       -------------- Photos Attached --------------
//     `;
//
//         const textResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//             method: 'POST',
//             body: new URLSearchParams({
//                 'chat_id': chatId,
//                 'text': message,
//                 'parse_mode': 'markdown',
//             }),
//         });
//
//         if (!textResponse.ok) {
//             console.error('Telegram API returned an error for sending text:', textResponse.statusText);
//             return false;
//         }
//
//         if (data.file && data.file.length > 0) {
//             const separatorMessage = '----------------------\n';
//             const photoArray = Array.from(data.file) as File[];
//             const formData = new FormData();
//
//             formData.append('chat_id', chatId);
//
//             const mediaGroup = photoArray.map((_, index) => ({
//                 type: 'photo',
//                 media: `attach://photo_${index}`,
//                 caption: separatorMessage + message,
//             }));
//
//             photoArray.forEach((photo, index) => {
//                 formData.append(`photo_${index}`, photo, `photo_${index}`);
//             });
//
//             formData.append('media', JSON.stringify(mediaGroup));
//
//             const photoResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMediaGroup`, {
//                 method: 'POST',
//                 body: formData,
//             });
//
//             if (!photoResponse.ok) {
//                 console.error('Telegram API returned an error for sending photos:', photoResponse.statusText);
//                 return false;
//             } else {
//                 console.log('Telegram message with text and photos sent successfully');
//             }
//         } else {
//             console.log('Telegram message with text sent successfully');
//         }
//
//         return true;
//     } catch (error) {
//         console.error('Error sending Telegram message:', error);
//         return false;
//     }
// };
