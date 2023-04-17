import Image from "components/Image/Image";
import Employee from "dtos/Employee";
import style from "./EmployeeGridItem.module.scss";

interface EmployeeGridItemProps {
  employee: Employee;
}

const EmployeeGridItem = ({ employee }: EmployeeGridItemProps) => (
  <li className={style.employee}>
    <Image
      src={employee.imagePortraitUrl}
      alt={`Profile picture of ${employee.name}! Handsome employee right?`}
      variant="grid-portrait"
      title={employee.name}
    />
    <p>{employee.name}</p>
    <hr />
    {employee.office && <p>Office: {employee.office}</p>}
  </li>
);

export default EmployeeGridItem;
