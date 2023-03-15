import React from "react";
import { render } from "@testing-library/react";
import ArticleContainer from "../Components/ArticleContainer/ArticleContainer";

describe('Name of the group', () => {
  const validProps = {
    userID: jest.fn(), 
    articleCategory: jest.fn(),
    searchQuery: jest.fn()
  }

  it('renders correctly', () => {
    const { asFragment } = render(<ArticleContainer 
      userID={validProps.userID} 
      articleCategory={validProps.articleCategory} 
      searchQuery={validProps.searchQuery} 
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});


