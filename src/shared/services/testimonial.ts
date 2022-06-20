import axios, { AxiosResponse } from "axios";
import { apiService } from "../constants/url";

/**
 * success
 */
export const getTestimonialList = async () => {
  try {
    const response: AxiosResponse = await axios.get(`${apiService}/testimonial`);
    return await response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

/**
 * in development...
 */
export const getTestimonialCountries = async () => {
  try {
    const response: AxiosResponse = await axios.get(`${apiService}/testimonial/countries`);
    return await response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

/**
 * success
 */
export const getTetimonialListByCountry = async (country: string) => {
  try {
    const response: AxiosResponse = await axios.get(`${apiService}/testimonial`, { params: { country } });
    return await response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
