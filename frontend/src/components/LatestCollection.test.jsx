import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LatestCollection from "./LatestCollection";
import ShopContext from "../context/ShopContext";
import { MemoryRouter } from "react-router-dom";

// mock products
const latestProducts = [
  { _id: "1", image: ["image1"], price: 5, name: "product1" },
  { _id: "2", image: ["image2"], price: 10, name: "product2" },
  { _id: "3", image: ["image3"], price: 15, name: "product3" },
  { _id: "4", image: ["image4"], price: 20, name: "product4" },
  { _id: "5", image: ["image5"], price: 25, name: "product5" },
  { _id: "6", image: ["image6"], price: 30, name: "product6" },
  { _id: "7", image: ["image7"], price: 35, name: "product7" },
  { _id: "8", image: ["image8"], price: 40, name: "product8" },
  { _id: "9", image: ["image9"], price: 45, name: "product9" },
  { _id: "10", image: ["image10"], price: 50, name: "product10" },
  { _id: "11", image: ["image11"], price: 55, name: "product11" },
];

// Reusable render function
const renderWithContext = (ui, value) => {
  return render(
    <MemoryRouter>
      <ShopContext.Provider value={value}>{ui}</ShopContext.Provider>
    </MemoryRouter>
  );
};

describe("Testing the LatestCollection.jsx file", () => {
  test("displays title and 10 products", () => {
    // rendering and setting up the snap shot matching
    const { container } = renderWithContext(<LatestCollection />, {
      products: latestProducts,
    });
    expect(container).toMatchSnapshot();

    // checking for the title and description
    const title = screen.getByText(/latest collect/i);
    expect(title).toBeInTheDocument();
    const description = screen.getByText(/discover our latest collection/i);
    expect(description).toBeInTheDocument();

    // checking the products
    const products = screen.queryAllByText(/product/i);
    expect(products).toHaveLength(10);

    // 11th product shall not be displayed
    const product11 = screen.queryByText(/product 11/i);
    expect(product11).toBeNull();
  });
});
