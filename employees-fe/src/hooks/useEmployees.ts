import { getAllEmployees } from "api/employees";
import Employee from "dtos/Employee";
import { useEffect, useMemo, useState } from "react";
import ApiResponse from "types/ApiResponse";
import EmployeesSort from "types/EmployeesSort";
import EmployeesView from "types/EmployeesView";

const highString = "������";

type EmployeeStringProperty = keyof Omit<Employee, "highlighted" | "published">;

const makeEmployeeStringCompare =
  (propertyName: EmployeeStringProperty) => (a: Employee, b: Employee) =>
    (a[propertyName] ?? highString).localeCompare(
      b[propertyName] ?? highString
    );

const useEmployees = () => {
  const [employeesResponse, setEmployeesResponse] = useState<
    ApiResponse<Employee[]>
  >({ status: "initial", responseData: null, error: null });

  const [activeFilter, setActiveFilter] = useState("");
  const [activeView, setActiveView] = useState<EmployeesView>("grid");
  const [activeSort, setActiveSort] = useState<EmployeesSort>("name");

  useEffect(() => {
    let isCurrent = true;
    getAllEmployees().then((response) => {
      if (isCurrent) {
        setEmployeesResponse(response);
      }
    });
    return () => {
      isCurrent = false;
    };
  }, [setEmployeesResponse]);

  const employees = useMemo<Employee[]>(() => {
    if (!employeesResponse.responseData) {
      return [];
    }
    const filteredEmployees = employeesResponse.responseData.filter(
      ({ name, office }: Employee) => {
        const lowerCaseFilter = activeFilter.toLowerCase();
        return (
          name.toLowerCase().includes(lowerCaseFilter) ||
          office?.toLowerCase().includes(lowerCaseFilter)
        );
      }
    );

    const sortedEmployees = filteredEmployees.sort(
      makeEmployeeStringCompare(activeSort)
    );

    return sortedEmployees;
  }, [employeesResponse, activeFilter, activeSort]);

  return {
    employees,
    activeFilter,
    activeView,
    activeSort,
    onUpdateSort: setActiveSort,
    onUpdateFilter: setActiveFilter,
    onUpdateView: setActiveView,
  };
};

export default useEmployees;
