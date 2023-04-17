import EmployeeGridItem from "components/EmployeeGridItem/EmployeeGridItem";
import Employee from "dtos/Employee";
import style from "./EmployeeGrid.module.scss";

interface EmployeeGridProps {
  employees: Employee[];
}

const EmployeeGrid = ({ employees }: EmployeeGridProps) => (
  <ul className={style.grid}>
    {employees.map((employee) => (
      <EmployeeGridItem employee={employee} />
    ))}
  </ul>
);

export default EmployeeGrid;
