import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "./hooks/useForm";

test("returns initial values", () => {
  const initialValues = {
    firstName: "Donald Duck",
    funny: true,
    employer: "Disney",
  };
  const { result } = renderHook(() => useForm(initialValues));
  const values = result.current.filter(
    (v) =>
      typeof v !== "function" &&
      typeof v === "object" &&
      v.hasOwnProperty("firstName")
  );
  expect(values[0]).toBe(initialValues);
});

// test("returns handler function", () => {
//   const { result } = renderHook(() => useForm());

//   expect(typeof result.current[1]).toBe("function");
// });

// test("updates values through changeHandle", () => {
//   const initialValues = {
//     firstName: "Donald Duck",
//     funny: true,
//     employer: "Disney",
//   };

//   const { result } = renderHook(() => useForm(initialValues));

//   act(() => {
//     result.current[1]({ target: { firstName: "name", value: "Mickey Mouse" } });
//   });

//   expect(result.current[0]).toStrictEqual({
//     ...initialValues,
//     firstName: "Mickey Mouse",
//   });
// });
