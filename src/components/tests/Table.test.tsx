import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table from "../Table";

const content = {
  confiture: "jar",
  steak: "pan",
};

test("loads and displays greeting", async () => {
  render(<Table content={content} tableKey="table" />);

  expect(screen.getByRole("table")).toHaveClass("my-4");
  expect(screen.getByText("jar")).toHaveClass("text-left");
});
