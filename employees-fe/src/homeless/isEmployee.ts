import Employee from "dtos/Employee";

const isString = (subject: any): subject is string => {
  return typeof subject === "string";
};
const isStringOrNull = (subject: any): subject is string | null => {
  return typeof subject === "string" || subject === null;
};
const isBoolean = (subject: any): subject is boolean => {
  return typeof subject === "boolean";
};
/**
 * Typeguard for Employee
 * @param subject
 * @returns
 */
const isEmployee = (subject: unknown): subject is Employee => {
  if (typeof subject !== "object" || subject === null) {
    return false;
  }

  const employeeSubject = subject as Employee;

  if (typeof employeeSubject.name !== "string") {
    return false;
  }

  const anySubject = subject as any;

  let res = true;

  ["name", "email", "orgUnit"].forEach((propertyName) => {
    if (!isString(anySubject[propertyName])) {
      res = false;
    }
  });

  [
    "phoneNumber",
    "office",
    "manager",
    "mainText",
    "gitHub",
    "twitter",
    "stackOverflow",
    "linkedIn",
    "imagePortraitUrl",
    "imageWallOfLeetUrl",
    "primaryRole",
    "secondaryRole",
    "area",
  ].forEach((propertyName) => {
    if (!isStringOrNull(anySubject[propertyName])) {
      res = false;
    }
  });

  ["highlighted", "published"].forEach((propertyName) => {
    if (!isBoolean(anySubject[propertyName])) {
      res = false;
    }
  });

  return res;
};

export default isEmployee;
