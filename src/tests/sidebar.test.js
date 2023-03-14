import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

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

    it("renders the text and buttons to sort by date", () => {
        render(<Sidebar 
            reverseOrder={validProps.reverseOrder} 
            articles={validProps.articles} 
            selected={validProps.selected} 
            setSelected={validProps.setSelected} />);

        expect(screen.getByText("Sort by Date:")).toBeInTheDocument();
        expect(screen.getByText("Most Recent")).toBeInTheDocument();
        expect(screen.getByText("Oldest")).toBeInTheDocument();
    });

    it("calls the correct function when most recent clicked", async () => {
        render(<Sidebar 
            reverseOrder={validProps.reverseOrder} 
            articles={validProps.articles} 
            selected={validProps.selected} 
            setSelected={validProps.setSelected} />)
        const button = screen.getByTestId("button1");
        const button2 = screen.getByTestId("button2");
        await fireEvent.click(button2);
        await fireEvent.click(button);

        expect(validProps.reverseOrder).toHaveBeenCalled();
    });

    it("calls the correct function when oldest clicked", async () => {
        render(<Sidebar 
            reverseOrder={validProps.reverseOrder} 
            articles={validProps.articles} 
            selected={validProps.selected} 
            setSelected={validProps.setSelected} />)
        const button2 = screen.getByTestId("button2");
        await fireEvent.click(button2);

        expect(validProps.reverseOrder).toHaveBeenCalledTimes(1);
    });

    it("renders filters text", () => {
        render(<Sidebar 
            reverseOrder={validProps.reverseOrder} 
            articles={validProps.articles} 
            selected={validProps.selected} 
            setSelected={validProps.setSelected} />);

        expect(screen.getByText("Filter by Source:")).toBeInTheDocument();
    });

    xit("has the correct select and option elements", () => {
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
