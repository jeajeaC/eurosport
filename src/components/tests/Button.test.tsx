import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";

test("loads and displays greeting", async () => {
  render(<Button id="button">click me</Button>);

  expect(screen.getByRole("button")).toHaveTextContent("click me");
});
