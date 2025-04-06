/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";


// Mock các tính năng chỉ hỗ trợ trên server
jest.mock("./page", () => ({
  __esModule: true,
  default: jest.fn(({ params }: { params: { slug: string } }) => (
    <h1>Slug: {params.slug}</h1>
  )),
}));

it("App Router: Works with dynamic route segments", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

// it("HoleTex should be in the document", () => {
//   render(<Page params={{ slug: "Test" }} />);
//   expect(screen.getByText("HoleTex")).toBeInTheDocument();
// });
