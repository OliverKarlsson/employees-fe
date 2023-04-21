import EmployeeGridItem from "components/EmployeeGridItem/EmployeeGridItem";
import EmployeeRowItem from "components/EmployeeRowItem/EmployeeRowItem";
import Employee from "dtos/Employee";
import style from "./EmployeeView.module.scss";
import EmployeesView from "types/EmployeesView";

interface EmployeeViewProps {
  employees: Employee[];
  activeView: EmployeesView;
}

const EmployeeView = ({ activeView, employees }: EmployeeViewProps) => (
  <ul className={activeView === "grid" ? style.grid : style.list}>
    {activeView === "grid"
      ? employees.map((employee) => <EmployeeGridItem employee={employee} />)
      : employees.map((employee) => <EmployeeRowItem employee={employee} />)}
  </ul>
);

export default EmployeeView;
