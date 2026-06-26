import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../Navigation/Navbar";

describe("Navbar", () => {
  it("renders all menu options", () => {
    const options = ["About", "Skills", "Projects"];
    render(<Navbar menuOptions={options} />);

    options.forEach((opt) => {
      expect(screen.getByText(opt)).toBeInTheDocument();
    });
  });

  it("calls onLinkClick when a link is clicked", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Navbar
        menuOptions={["About", "Skills"]}
        onLinkClick={onClick}
      />,
    );

    await user.click(screen.getByText("About"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
