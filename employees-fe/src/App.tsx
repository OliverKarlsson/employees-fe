import EmployeeView from "components/EmployeeView/EmployeeView";
import EmployeesTool from "components/EmployeesTool/EmployeesTool";
import useEmployees from "hooks/useEmployees";

const App = () => {
  const { employees, activeView, activeFilter, activeSort, ...rest } =
    useEmployees();

  return (
    <>
      <EmployeesTool
        activeFilter={activeFilter}
        activeSort={activeSort}
        activeView={activeView}
        {...rest}
      />
      <main>
        <section className="visually-hidden">
          <h2>View configuration summary</h2>
          <p>The active sort is set to {activeSort}</p>
          {activeFilter && (
            <p>There exists a filter on the word: "{activeFilter}"</p>
          )}
          <p>The active view is set to {activeView}</p>
        </section>
        <section>
          <EmployeeView activeView={activeView} employees={employees} />
        </section>
      </main>
    </>
  );
};

export default App;
