import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "../Projects/ProjectCard";
import type { Project } from "../Projects/data";

const mockProject: Project = {
  title: "Test Project",
  description: "A test project description",
  images: ["test.jpg"],
  tech: ["React", "TypeScript"],
  interval: 3000,
  category: "frontend",
};

describe("ProjectCard", () => {
  it("renders the project title", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("renders tech badges", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });
});
