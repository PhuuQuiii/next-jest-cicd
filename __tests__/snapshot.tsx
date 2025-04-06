/**
 * @jest-environment jsdom
 */
import { render, act } from "@testing-library/react";
import Home from "@/pages/home/index";

it("renders homepage unchanged", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
