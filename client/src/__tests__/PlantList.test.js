import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import PlantList from "../components/PlantList";

test("Fetches the list of plants", async () => {
  render(
    <PlantList addToCart={jest.fn()} />
  );

  await waitFor(() => screen.getAllByTestId('plant-card'))

  expect(screen.getAllByTestId('plant-card')).toHaveLength(2);
});

test("Calls addToCart function when add button is clicked", async () => {
  const addToCart = jest.fn();
  render(
    <PlantList addToCart={addToCart} />
  );

  await waitFor(() => screen.getAllByTestId('plant-card'))

  fireEvent.click(screen.getAllByRole('button', { name: /Add to cart/i })[0]);

  expect(addToCart).toHaveBeenCalled();
});
