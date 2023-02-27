import React from "react";
import { render, screen } from "@testing-library/react";

import Sidebar from "../Components/Sidebar/Sidebar"

describe("Sidebar", () => {
    it("renders filters text and options", () => {
        render(<Sidebar />);

        expect(screen.getByText("Filters")).toBeInTheDocument();
        expect(screen.getByText("Most Recent")).toBeInTheDocument();
        expect(screen.getByText("By Publisher")).toBeInTheDocument();
    });

    it("renders share text and links", () => {
        render(<Sidebar />);

        expect(screen.getByText("Share")).toBeInTheDocument();
        expect(screen.getByText("Email")).toBeInTheDocument();
        expect(screen.getByText("Twitter")).toBeInTheDocument();
        expect(screen.getByText("Facebook")).toBeInTheDocument();
    });
});