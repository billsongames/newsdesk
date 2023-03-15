import React from "react";
import { render } from "@testing-library/react";
import ArticleCardMain from "../Components/ArticleCardMain/ArticleCardMain";

describe('Name of the group', () => {
  const validProps = {
    title: "test title", 
  }

  it('renders correctly', () => {
    const { asFragment } = render(<ArticleCardMain 
      title={validProps.title} 
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});


