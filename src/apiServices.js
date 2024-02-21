import emailjs from "@emailjs/browser";

export async function sendMailApiService(form) {
  const response = await emailjs.sendForm(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_TEMPLATE_ID,
    form,
    {
      publicKey: process.env.REACT_APP_PUBLIC_KEY,
    }
  );

  return response;
}
