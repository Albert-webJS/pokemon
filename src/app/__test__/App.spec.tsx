import { render } from "@testing-library/react";
import { App } from "../index";

test("demo", () => {
  expect(true).toBe(true);
});

test("Renders the main page", () => {
  render(<App />);
  expect(true).toBeTruthy();
});
