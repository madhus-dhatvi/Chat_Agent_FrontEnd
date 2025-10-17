import axios from "axios";
const BASE_URL = "https://chatbot-backend-pi-six.vercel.app/api/faqs";
export async function dataFetch(mode) {
    const url = mode ? `${BASE_URL}/${mode}` : BASE_URL
    const response = await axios.get(url);
    return response.data;
}
