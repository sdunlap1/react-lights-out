// src/Board.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Board from "./Board";

// Test case: check if "You Won" message appears when all lights are off
test("displays 'You Won' when all lights are off", () => {
  // Mock the board with all lights off
  const nrows = 3;
  const ncols = 3;

  // Render the Board component
  render(<Board nrows={nrows} ncols={ncols} chanceLightStartsOn={0} />);

  // The "You Won" message should appear since all lights are off
  expect(screen.getByText("You Won!")).toBeInTheDocument();
});
