import { render, screen } from "@testing-library/react";
import Notification from "../components/notification";
import "jest-styled-components";
import Themes from "../theme/theme";

describe("Notification component", () => {
  it("renders nothing when closed", () => {
    render(<Notification open={false} />);
    expect(screen.queryByRole("alert")).toBeNull();
  });

  it("renders notification message with default severity (success)", () => {
    const message = "This is a notification message.";
    const severity = "success";
    render(<Notification open={true} message={message} severity={severity} />);

    const notification = screen.getByTestId("notification");
    expect(notification).toBeInTheDocument;
    expect(notification.textContent).toContain(message);
    const bg = Themes.light.success;
    expect(notification).toHaveStyleRule(bg);
  });

  it("renders notification message with default severity (warning)", () => {
    const message = "This is a notification message.";
    const severity = "warning";
    render(<Notification open={true} message={message} severity={severity} />);

    const notification = screen.getByTestId("notification");
    expect(notification).toBeInTheDocument;
    expect(notification.textContent).toContain(message);
    const bg = Themes.light.warning;
    expect(notification).toHaveStyleRule(bg);
  });

  it("renders notification message with specified severity (danger)", () => {
    const message = "This is an error notification.";
    const severity = "error";
    render(<Notification open={true} message={message} severity={severity} />);

    const notification = screen.getByTestId("notification");
    expect(notification).toBeInTheDocument;
    expect(notification.textContent).toContain(message);
    const bg = Themes.light.danger;
    expect(notification).toHaveStyleRule(bg);
  });
});
