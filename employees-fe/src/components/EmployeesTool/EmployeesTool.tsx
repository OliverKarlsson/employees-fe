import EmployeesSort from "types/EmployeesSort";
import EmployeesView from "types/EmployeesView";
import style from "./EmployeesTool.module.scss";

interface EmployeesToolProps {
  onUpdateSort: (sort: EmployeesSort) => void;
  onUpdateFilter: (filter: string) => void;
  onUpdateView: (view: EmployeesView) => void;
  activeFilter: string;
  activeView: EmployeesView;
  activeSort: EmployeesSort;
}

const EmployeesTool = ({
  onUpdateSort,
  onUpdateFilter,
  onUpdateView,
  activeFilter,
  activeView,
  activeSort,
}: EmployeesToolProps) => {
  return (
    <header className={style.tool}>
      <div className={style["tool__toggle-zone"]}>
        <button
          className={style["tool__toggle-button"]}
          onClick={() => {
            onUpdateSort("name");
          }}
          disabled={activeSort === "name"}
        >
          {activeSort === "name" ? "name" : "sort on name"}
        </button>
        <button
          className={style["tool__toggle-button"]}
          onClick={() => {
            onUpdateSort("office");
          }}
          disabled={activeSort === "office"}
        >
          {activeSort === "office" ? "office" : "sort on office"}
        </button>
      </div>
      <div className={style["tool__toggle-zone"]}>
        <button
          className={style["tool__toggle-button"]}
          onClick={() => {
            onUpdateView("grid");
          }}
          disabled={activeView === "grid"}
        >
          {activeView === "grid" ? "grid" : "sort on grid"}
        </button>
        <button
          className={style["tool__toggle-button"]}
          onClick={() => {
            onUpdateView("list");
          }}
          disabled={activeView === "list"}
        >
          {activeView === "list" ? "list" : "sort on list"}
        </button>
      </div>
      &nbsp;
      <div className={style["tool__filter-growth"]}>
        <input
          className={style["tool__filter-bar"]}
          value={activeFilter}
          onChange={(e) => onUpdateFilter(e.target.value)}
        />

        {activeFilter !== "" && (
          <button
            className={style["tool__clear-button"]}
            onClick={() => onUpdateFilter("")}
          >
            ╳
          </button>
        )}
      </div>
    </header>
  );
};

export default EmployeesTool;
