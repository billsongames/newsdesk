import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "../Components/NavBar/NavBar"

describe("NavBar", () => {
    const validProps = {
        onNavBarCategoryChange: jest.fn(),
        onSearchSubmit: jest.fn(),
        userID: "testUser",
        onLogin: jest.fn(),
        onLogout: jest.fn()
    };

    xit("renders logo and categories", () => {
        render(<NavBar 
            onNavBarCategoryChange={validProps.onNavBarCategoryChange}
            onSearchSubmit={validProps.onSearchSubmit}
            userID={validProps.userID}
            onLogin={validProps.onLogin}
            onLogout={validProps.onLogout}
        />);

        expect(screen.getByAltText("logo")).toBeInTheDocument();
        expect(screen.getByText("General")).toBeInTheDocument();
        expect(screen.getByText("World")).toBeInTheDocument();
        expect(screen.getByText("National")).toBeInTheDocument();
        expect(screen.getByText("Business")).toBeInTheDocument();
        expect(screen.getByText("Technology")).toBeInTheDocument();
        expect(screen.getByText("Entertainment")).toBeInTheDocument();
        expect(screen.getByText("Sports")).toBeInTheDocument();
        expect(screen.getByText("Science")).toBeInTheDocument();
        expect(screen.getByText("Health")).toBeInTheDocument();
    });

    xit("handles search form submission", () => {
        const handleSubmit = jest.fn();
        render(<NavBar 
            onNavBarCategoryChange={validProps.onNavBarCategoryChange}
            onSearchSubmit={validProps.onSearchSubmit}
            userID={validProps.userID}
            onLogin={validProps.onLogin}
            onLogout={validProps.onLogout}
        />);

        const searchInput = screen.getByPlaceholderText("Search");
        const searchButton = screen.getByTestId("button");

        fireEvent.change(searchInput, { target: { value: "sports" } });
        fireEvent.click(searchButton);

        expect(handleSubmit).toHaveBeenCalledWith("sports");
    });

    xit("matches the snapshot", () => {
        const { asFragment } = render(<NavBar 
            onNavBarCategoryChange={validProps.onNavBarCategoryChange}
            onSearchSubmit={validProps.onSearchSubmit}
            userID={validProps.userID}
            onLogin={validProps.onLogin}
            onLogout={validProps.onLogout}
        />);

        expect(asFragment()).toMatchSnapshot();
    });
});