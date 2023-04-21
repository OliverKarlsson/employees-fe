import { expect, it, describe, vi, afterEach } from "vitest";
import useEmployees from "./useEmployees";
import Employee from "dtos/Employee";
import employees from "__fixtures__/employees";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { getAllEmployees } from "api/employees";
import { useEffect } from "react";
import ApiResponse from "types/ApiResponse";

const p = new Promise<ApiResponse<Employee[]>>((resolve) => {
  resolve({ status: "loaded", responseData: employees, error: null });
});

vi.mock("../api/employees", () => ({
  getAllEmployees: vi.fn().mockImplementation(() => p),
}));
describe("useEmployees", () => {
  it("should be a function", () => {
    expect(useEmployees).toBeInstanceOf(Function);
  });
  describe("when employees are fetched successfully", () => {
    afterEach(() => {
      (getAllEmployees as unknown as any).mockClear();
    });

    it("should fetch employees only once", () => {
      const TestComponent = () => {
        useEmployees();
        return null;
      };
      render(<TestComponent />);
      expect(getAllEmployees).toHaveBeenCalledOnce();
    });

    it("should have correct default values (including sort)", async () => {
      const TestComponent = () => {
        const { activeSort, activeFilter, activeView, employees } =
          useEmployees();
        return (
          <>
            <script id="data" type="application/json">
              {JSON.stringify({
                activeFilter,
                activeView,
                activeSort,
                employees: employees.slice(0, 10),
              })}
            </script>
          </>
        );
      };
      const { container } = render(<TestComponent />);
      expect(container.firstChild?.textContent).toMatchSnapshot();
      await waitFor(() =>
        expect(
          JSON.parse(container.firstChild?.textContent ?? "").employees
        ).not.toHaveLength(0)
      );
      expect(container.firstChild?.textContent).toMatchSnapshot();
    });

    it("should update sort successfully", async () => {
      const TestComponent = () => {
        const { activeSort, employees, onUpdateSort } = useEmployees();
        return (
          <>
            <script id="data" type="application/json">
              {JSON.stringify({
                activeSort,
                employees: employees.slice(0, 50),
              })}
            </script>
            <button onClick={() => onUpdateSort("office")} />
          </>
        );
      };
      const { container } = render(<TestComponent />);
      await waitFor(() =>
        expect(
          JSON.parse(container.firstChild?.textContent ?? "").employees
        ).not.toHaveLength(0)
      );
      container.lastChild && fireEvent.click(container.lastChild);

      expect(
        JSON.parse(container.firstChild?.textContent ?? "").employees.map(
          ({ name, office }: any) => name + ":" + office
        )
      ).toMatchSnapshot();
    });

    it("should update filter successfully", async () => {
      const TestComponent = () => {
        const { activeSort, employees, onUpdateFilter } = useEmployees();
        return (
          <>
            <script id="data" type="application/json">
              {JSON.stringify({
                activeSort,
                employees: employees.slice(0, 50),
              })}
            </script>
            <button onClick={() => onUpdateFilter("ING")} />
          </>
        );
      };
      const { container } = render(<TestComponent />);
      await waitFor(() =>
        expect(
          JSON.parse(container.firstChild?.textContent ?? "").employees
        ).not.toHaveLength(0)
      );
      container.lastChild && fireEvent.click(container.lastChild);

      expect(
        JSON.parse(container.firstChild?.textContent ?? "").employees.map(
          ({ name, office }: any) => name + ":" + office
        )
      ).toMatchSnapshot();
    });

    it("should remove filter successfully", async () => {
      const TestComponent = () => {
        const { activeSort, employees, onUpdateFilter } = useEmployees();
        useEffect(() => {
          onUpdateFilter("ING");
        }, [onUpdateFilter]);
        return (
          <>
            <script id="data" type="application/json">
              {JSON.stringify({
                activeSort,
                employees: employees.slice(0, 50),
              })}
            </script>
            <button onClick={() => onUpdateFilter("")} />
          </>
        );
      };
      const { container } = render(<TestComponent />);
      await waitFor(() =>
        expect(
          JSON.parse(container.firstChild?.textContent ?? "").employees
        ).not.toHaveLength(0)
      );
      container.lastChild && fireEvent.click(container.lastChild);

      expect(
        JSON.parse(container.firstChild?.textContent ?? "").employees.map(
          ({ name, office }: any) => name + ":" + office
        )
      ).toMatchSnapshot();
    });
  });

  describe.todo("when employees are fetched unsuccessfully");
});
