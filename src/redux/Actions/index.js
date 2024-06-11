import axios from "axios";

export const scanDocument = async (payload) => {
  try {
    const formData = new FormData();
    formData.append(`files`, payload);
    const response = await axios.post(
      "https://dsfsmartdoc.com/process-document",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
