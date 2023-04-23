
  

  import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import Card1 from "./Card1";

describe("Card1", () => {
  test("displays the correct header", () => {
    render(<Card1 />);
    const headerElement = screen.queryByText('Current Conversion Rate');
    expect(headerElement).toBeTruthy();
  });
});