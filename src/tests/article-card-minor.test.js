import React from "react";
import { render, screen, fireEvent, getNodeText } from "@testing-library/react";
import ArticleCardMinor from "../Components/ArticleCardMinor/ArticleCardMinor";

describe("ArticleCardMinor", () => {

  
  xit("renders correctly", () => {
    const validProps = {
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
      ]
    }  

    render(<ArticleCardMinor props={validProps.articles} />);

    const { asFragment } = render(<ArticleCardMinor props={validProps.articles} />);

      expect(asFragment()).toMatchSnapshot();

  })
})