import Employee from "dtos/Employee";
import isEmployee from "./isEmployee";

/**
 * Typeguard for an array of Employee
 * @param subject
 * @returns
 */
const isEmployees = (subject: unknown): subject is Employee[] => {
  if (!Array.isArray(subject)) {
    return false;
  }
  return subject.reduce((acc, current) => {
    if (acc === false || !isEmployee(current)) {
      return false;
    }
    return true;
  }, true);
};

export default isEmployees;
