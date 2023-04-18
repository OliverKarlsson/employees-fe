import EmployeeRowItem from "components/EmployeeRowItem/EmployeeRowItem";
import Employee from "dtos/Employee";
import style from "./EmployeeList.module.scss";

interface EmployeeListProps {
  employees: Employee[];
}

const EmployeeList = ({ employees }: EmployeeListProps) => (
  <ul className={style.list}>
    {employees.map((employee) => (
      <EmployeeRowItem employee={employee} />
    ))}
  </ul>
);

export default EmployeeList;
