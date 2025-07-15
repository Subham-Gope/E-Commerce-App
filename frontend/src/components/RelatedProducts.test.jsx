import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ShopContext from "../context/ShopContext";
import RelatedProducts from "./RelatedProducts";

// mock Products
const mockProducts = [
  {
    _id: "1",
    name: "Black Tee",
    price: 25,
    image: ["black.jpg"],
    category: "clothing",
    subCategory: "tshirt",
  },
  {
    _id: "2",
    name: "White Tee",
    price: 30,
    image: ["white.jpg"],
    category: "clothing",
    subCategory: "tshirt",
  },
  {
    _id: "3",
    name: "Grey Tee",
    price: 20,
    image: ["grey.jpg"],
    category: "clothing",
    subCategory: "tshirt",
  },
  {
    _id: "4",
    name: "Green Tee",
    price: 28,
    image: ["green.jpg"],
    category: "clothing",
    subCategory: "tshirt",
  },
  {
    _id: "5",
    name: "Blue Tee",
    price: 22,
    image: ["blue.jpg"],
    category: "clothing",
    subCategory: "tshirt",
  },
  {
    _id: "6",
    name: "Denim Jacket",
    price: 60,
    image: ["jacket.jpg"],
    category: "clothing",
    subCategory: "jacket",
  },
];

// render with context function
const renderWithContext = (ui, value) => {
  return render(
    <MemoryRouter>
      <ShopContext.Provider value={value}>{ui}</ShopContext.Provider>
    </MemoryRouter>
  );
};

describe("RelatedProducts.jsx", () => {
  test("renders 5 related items, filters by category + subCategory", () => {
    // rendering and settin up the snapshot matching
    const { container } = renderWithContext(
      <RelatedProducts category="clothing" subCategory="tshirt" />,
      {
        products: mockProducts,
      }
    );
    expect(container).toMatchSnapshot();

    // checking the title
    expect(screen.getByText(/related/i)).toBeInTheDocument();

    // checking the displayed products using the link tag , should be 5 in total
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(5);

    //checking if 6th product is not displayed
    expect(screen.queryByText(/Denim Jacket/i)).toBeNull();
  });
});
