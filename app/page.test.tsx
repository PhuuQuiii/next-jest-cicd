/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

// Mock `metadata` để tránh lỗi NEXT_RSC_ERR_CLIENT_METADATA_EXPORT
jest.mock("./page", () => ({
  __esModule: true,
  metadata: {},
  default: jest.fn(() => <h1>App Router</h1>),
}));

it("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(screen.getByRole("heading")).toHaveTextContent("Phú Quí tập làm CI/CD");
});
