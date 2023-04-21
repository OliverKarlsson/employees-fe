import EmployeeGrid from "components/EmployeeGrid/EmployeeGrid";
import EmployeeList from "components/EmployeeList/EmployeeList";
import EmployeesTool from "components/EmployeesTool/EmployeesTool";
import useEmployees from "hooks/useEmployees";

const App = () => {
  const { employees, activeView, ...rest } = useEmployees();

  return (
    <>
      <EmployeesTool activeView={activeView} {...rest} />
      {activeView === "grid" && <EmployeeGrid employees={employees} />}
      {activeView === "list" && <EmployeeList employees={employees} />}
    </>
  );
};

export default App;
