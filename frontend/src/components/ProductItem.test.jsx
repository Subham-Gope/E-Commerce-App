// import { describe, test, expect, vi } from "vitest";
// import { screen, render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { MemoryRouter } from "react-router-dom";
// import ShopContext from "./../context/ShopContext";
// import ProductItem from "./ProductItem";

// // creating default mock context
// const defaultMockContext = {
//   currency: "$",
// };

// // creating mockProps
// const defaultMockProps = {
//   id: "1",
//   image: ["shirt.png"],
//   name: "shirt",
//   price: 23,
// };

// // render with context function
// const renderWithContext = (value, ui) =>
//   render(
//     <MemoryRouter>
//       <ShopContext.Provider value={value}>{ui}</ShopContext.Provider>
//     </MemoryRouter>
//   );

// describe("Testing the ProductItem.jsx file", () => {
//   test("rendering the product card", async () => {
//     // setting up the userEvent
//     const user = userEvent.setup();

//     //   rendering and setting up the snapshot matching
//     const { container } = renderWithContext(
//       defaultMockContext,
//       <ProductItem
//         id={defaultMockProps.id}
//         name={defaultMockProps.name}
//         image={defaultMockProps.image}
//         price={defaultMockProps.price}
//       />
//     );
//     expect(container).toMatchSnapshot();

//     // creating a spyLink mock
//     const spyLink = vi.fn();

//     // checking the texts
//     expect(screen.getByText(/shirt/i)).toBeInTheDocument();
//     expect(screen.getByText(/\$ 23/i)).toBeInTheDocument();

//     // checking the images
//     const images = screen.getAllByAltText(/product image/i);
//     expect(images).toHaveLength(1);
//     expect(images[0]).toHaveAttribute("src", "shirt.png");

//     //testing the link tag
//     const link = screen.getByRole("link", { name: /shirt/i });
//     expect(link).toBeInTheDocument();

//     // adding spy on link
//     link.addEventListener("click", spyLink);

//     // Initiating the user interactions
//     await user.click(link);
//     expect(spyLink).toHaveBeenCalled();
//   });
// });
