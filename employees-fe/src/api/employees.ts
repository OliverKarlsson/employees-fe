import Employee from "dtos/Employee";
import isEmployees from "homeless/isEmployees";
import ApiCall from "types/ApiCall";
import { baseUrl, apiKey } from "config";

/**
 * Fetches all employees
 * @returns
 */
export const getAllEmployees: ApiCall<Employee[]> = async () => {
  try {
    const response = await fetch(baseUrl, {
      headers: {
        Authorization: apiKey,
      },
    });
    const responseData = await response.json();
    if (!isEmployees(responseData)) {
      throw new Error(
        "Received unsuported employees in the `getAllEmployees` call. The response data was expected to be of type `Employee[]` etc..."
      );
    }
    return { status: "loaded", responseData, error: null };
  } catch (error) {
    return { status: "failed", responseData: null, error: error as Error };
  }
};
