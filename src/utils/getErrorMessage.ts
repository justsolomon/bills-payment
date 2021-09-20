import { AxiosError } from "axios";
import { APIResponse } from "types/apiResponses";

/**
 * Takes an axios error object and returns the error message
 * @param error axios error object or API response
 * @returns axios or API error message
 */
const getErrorMessage = (error: AxiosError | APIResponse): string => {
  if ((error as APIResponse).responseMessage)
    return (error as APIResponse).responseMessage;

  const axiosErrorResponse = (error as AxiosError).response;
  return axiosErrorResponse
    ? axiosErrorResponse.data.error.message
    : (error as AxiosError).message;
};

export default getErrorMessage;
