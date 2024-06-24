import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import App from "../App";

// Mock fetch function
globalThis.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([{ id: 1, name: "Item 1", category: "men's clothing" }]),
  })
);

// Mock child components to focus on App component testing
vi.mock("../Header", () => ({
  default: () => <div>Mocked Header</div>,
}));
vi.mock("../Shop/Shop", () => ({
  default: () => <div>Mocked Shop</div>,
}));
vi.mock("../Category/Category", () => ({
  default: () => <div>Mocked Category</div>,
}));

describe("App Component", () => {
  it("renders Header component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Mocked Header")).toBeInTheDocument();
  });

  it("fetches and sets items", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => expect(globalThis.fetch).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(globalThis.fetch).toHaveBeenCalledWith("URL"));

    // You can also add more assertions to check if items are passed correctly to child components
  });
});
