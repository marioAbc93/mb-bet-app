import { render, screen, cleanup } from "@testing-library/react";
import Button from "../components/custom-button";
import Themes from "../theme/theme";
import { ButtonProps } from "../constants";
import "jest-styled-components";

afterEach(cleanup);
describe("Button component", () => {
  it("renders primary button with correct color and text", () => {
    const buttonProps: ButtonProps = {
      description: "Click me",
      color: "primary",
      onClick: () => {},
    };

    render(<Button {...buttonProps} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument;
    const bg = Themes.light.primary;
    expect(button).toHaveStyleRule(bg);
    expect(button.textContent).toBe("Click me");
  });

  it("renders secondary button with correct color and text", () => {
    const buttonProps: ButtonProps = {
      description: "Cancel",
      color: "secondary",
      onClick: () => {},
    };

    render(<Button {...buttonProps} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument;
    const bg = Themes.light.secondary;
    expect(button).toHaveStyleRule(bg);
    expect(button.textContent).toBe("Cancel");
  });

  it("renders button with icon and description", () => {
    const buttonProps: ButtonProps = {
      description: "Search",
      onClick: () => {},
      color: "warning",
      icon: <svg />,
    };

    render(<Button {...buttonProps} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument;
    expect(button.textContent).toBe("Search");
  });

  it("renders button with description for non-bet type", () => {
    const buttonProps: ButtonProps = {
      description: "Delete all",
      onClick: () => {},
      color: "danger",
    };

    render(<Button {...buttonProps} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument;
    expect(button.textContent).toBe("Delete all");
  });

  it("renders button with description and value for event", () => {
    const buttonProps = {
      description: "Atletico junior",
      onClick: () => {},
      value: 10,
      isBet: true,
    };

    render(<Button {...buttonProps} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument;
    expect(button.textContent).toBe("Atletico junior10");
  });
});
