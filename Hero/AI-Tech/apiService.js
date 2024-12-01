import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:4355/api"; 


export const submitContactForm = async (formData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/contact/`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
      throw error;  // Rethrow the error to handle it in the component
    }
};