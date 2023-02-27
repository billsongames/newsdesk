import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "../Components/NavBar/NavBar"

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

    it("handles search form submission", () => {
        const handleSubmit = jest.fn();
        render(<NavBar onSubmit={handleSubmit} />);

        const searchInput = screen.getByPlaceholderText("Search");
        const searchButton = screen.getByTestId("button");

        fireEvent.change(searchInput, { target: { value: "sports" } });
        fireEvent.click(searchButton);

        expect(handleSubmit).toHaveBeenCalledWith("sports");
    });
});