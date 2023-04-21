import EmployeeView from "components/EmployeeView/EmployeeView";
import EmployeesTool from "components/EmployeesTool/EmployeesTool";
import useEmployees from "hooks/useEmployees";

const App = () => {
  const { employees, activeView, ...rest } = useEmployees();

  return (
    <>
      <EmployeesTool activeView={activeView} {...rest} />
      <EmployeeView activeView={activeView} employees={employees} />
    </>
  );
};

export default App;
