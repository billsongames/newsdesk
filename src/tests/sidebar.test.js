import React from "react";
import { render, screen } from "@testing-library/react";

import Sidebar from "../Components/Sidebar/Sidebar"

describe("Sidebar", () => {
    const validProps = {
        reverseOrder: jest.fn(),
        articles: [
            {
                title: "test_title_text",
                description: "test description text",
                content: "test description text",
                url: "test url",
                image: "test_image.jpg",
                publishedAt: "1970-01-01T00:0:00Z",
                source: {
                name: "test source",
                url: "test source url"
                }
            }
        ],
        selected: "",
        setSelected: jest.fn(),
    };

    it("renders filters text and options", () => {
        render(<Sidebar 
            reverseOrder={validProps.reverseOrder} 
            articles={validProps.articles} 
            selected={validProps.selected} 
            setSelected={validProps.setSelected} />);

        expect(screen.getByText("Sort by Date:")).toBeInTheDocument();
        expect(screen.getByText("Most Recent")).toBeInTheDocument();
        expect(screen.getByText("Oldest")).toBeInTheDocument();
        expect(screen.getByText("Filter by Source:")).toBeInTheDocument();
    });

    xit("renders share text and links", () => {
        render(<Sidebar 
            reverseOrder={validProps.reverseOrder} 
            articles={validProps.articles} 
            selected={validProps.selected} 
            setSelected={validProps.setSelected} />);
        });

    it("matches the snapshot", () => {
            const { asFragment } = render(<Sidebar 
                reverseOrder={validProps.reverseOrder} 
                articles={validProps.articles} 
                selected={validProps.selected} 
                setSelected={validProps.setSelected} />);

            expect(asFragment()).toMatchSnapshot();
    });

});
