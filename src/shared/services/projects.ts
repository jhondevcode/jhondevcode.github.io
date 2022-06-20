/**
 * This module provides service functions to work with the projects that have
 * been developed throughout the course, the data is brought from an api with
 * a private repository.
 */

import axios, { AxiosResponse } from "axios";
import { apiService } from "../constants/url";

export const getAllProjects = async () => {
  try {
    const response: AxiosResponse = await axios.get(`${apiService}/project`);
    return await response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProjectsByCountry = async (country: string) => {
  try {
    const response: AxiosResponse = await axios.get(`${apiService}/project`, { params: { country } });
    return await response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProjectCountries = async () => {
  try {
    const response: AxiosResponse = await axios.get(`${apiService}/project/countries`);
    return await response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProjectTechnologies = async () => {
  try {
    const response: AxiosResponse = await axios.get(`${apiService}/project/technologies`);
    return await response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProjectsByTechnology = async (technology: string) => {
  try {
    const response: AxiosResponse = await axios.get(`${apiService}/project`, { params: { technology } });
    return await response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
