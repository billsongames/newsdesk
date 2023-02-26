import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../Components/Test/Navbar"

describe("NavBar", () => {
    it("renders logo and categories", () => {
    render(<NavBar />);

    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(screen.getByText("Tech")).toBeInTheDocument();
    expect(screen.getByText("Business")).toBeInTheDocument();
    expect(screen.getByText("Politics")).toBeInTheDocument();
    expect(screen.getByText("Sport")).toBeInTheDocument();
    expect(screen.getByText("Entertainment")).toBeInTheDocument();
    });
});