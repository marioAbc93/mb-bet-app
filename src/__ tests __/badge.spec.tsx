import { render, screen } from "@testing-library/react";
import BadgeComponent from "../components/badge/index";

describe("BadgeComponent", () => {
  it("renders the badge with the provided number", () => {
    const testNumber = 5;
    render(<BadgeComponent number={testNumber} />);

    const badgeElement = screen.getByTestId("badge");
    expect(badgeElement.textContent).toBe(testNumber.toString());
  });
});
