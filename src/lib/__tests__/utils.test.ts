import { describe, it, expect } from "vitest";
import { cn } from "../utils";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("handles conditional classes", () => {
    const showHidden = false;
    expect(cn("base", showHidden && "hidden", "visible")).toBe("base visible");
  });

  it("merges Tailwind classes correctly", () => {
    expect(cn("px-4 py-2", "px-6")).toBe("py-2 px-6");
  });

  it("handles empty input", () => {
    expect(cn()).toBe("");
  });
});
