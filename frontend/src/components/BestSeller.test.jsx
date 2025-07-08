// import { describe, expect, test } from "vitest";
// import { screen, render } from "@testing-library/react";
// import ShopContext from "../context/ShopContext";
// import BestSeller from "./BestSeller";
// import { MemoryRouter } from "react-router-dom";

// // Mock products
// const mockProducts = [
//   {
//     _id: "1",
//     name: "Product 1",
//     image: ["img1.png"],
//     price: 100,
//     bestseller: true,
//   },
//   {
//     _id: "2",
//     name: "Product 2",
//     image: ["img2.png"],
//     price: 200,
//     bestseller: true,
//   },
//   {
//     _id: "3",
//     name: "Product 3",
//     image: ["img3.jpg"],
//     price: 300,
//     bestseller: true,
//   },
//   {
//     _id: "4",
//     name: "Product 4",
//     image: ["img4.jpg"],
//     price: 400,
//     bestseller: true,
//   },
//   {
//     _id: "5",
//     name: "Product 5",
//     image: ["img5.jpg"],
//     price: 500,
//     bestseller: true,
//   },
//   {
//     _id: "6",
//     name: "Product 6",
//     image: ["img6.jpg"],
//     price: 600,
//     bestseller: false,
//   }, // this product shall no appear in the render
// ];

// // Resuable render function
// const renderWithContext = (ui, value) => {
//   return render(
//     <MemoryRouter>
//       <ShopContext.Provider value={value}>{ui}</ShopContext.Provider>
//     </MemoryRouter>
//   );
// };

// describe("Testing the BestSeller.tsx file", () => {
//   test("renders only 5 bestseller items", () => {
//     // rendering the component
//     renderWithContext(<BestSeller />, { products: mockProducts });

//     // Checking the title texts
//     const title = screen.getByText(/best seller/i);
//     expect(title).toBeInTheDocument();
//     const description = screen.getByText(/shop our best sellers/i);
//     expect(description).toBeInTheDocument();

//     // first products shall be in the document
//     const product1 = screen.getByText(/product 1/i);
//     expect(product1).toBeInTheDocument();
//     const product2 = screen.getByText(/product 2/i);
//     expect(product2).toBeInTheDocument();
//     const product3 = screen.getByText(/product 3/i);
//     expect(product3).toBeInTheDocument();
//     const product4 = screen.getByText(/product 4/i);
//     expect(product4).toBeInTheDocument();
//     const product5 = screen.getByText(/product 5/i);
//     expect(product5).toBeInTheDocument();

//     // expect not to be in the document
//     const product6 = screen.queryByText(/product 6/i);
//     expect(product6).toBeNull();
//   });
// });
