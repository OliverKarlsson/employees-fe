import Image from "components/Image/Image";
import Employee from "dtos/Employee";
import style from "./EmployeeRowItem.module.scss";

interface EmployeeRowItemProps {
  employee: Employee;
}

const EmployeeRowItem = ({ employee }: EmployeeRowItemProps) => (
  <li className={style.employee}>
    <Image
      src={employee.imagePortraitUrl}
      alt={`Profile picture of ${employee.name}! Handsome employee right?`}
      variant="row-portrait"
      title={employee.name}
    />
    <div className={style["employee__description"]}>
      <p>{employee.name}</p>
      <hr />
      {employee.office && <p>Office: {employee.office}</p>}
    </div>
  </li>
);

export default EmployeeRowItem;
