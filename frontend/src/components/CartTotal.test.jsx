// import { describe, expect, test } from "vitest";
// import { screen, render } from "@testing-library/react";
// import ShopContext from "../context/ShopContext";
// import CartTotal from "./CartTotal";

// // Reusable render function
// const renderWithContext = (value) => {
//   return render(
//     <ShopContext.Provider value={value}>
//       <CartTotal />
//     </ShopContext.Provider>
//   );
// };

// // creating mock values
// const mockValues = {
//   currency: "$",
//   delivery_fee: 5,
//   getCartAmount: () => 120,
// };

// describe("Testing the CartTotal.jsx file", () => {
//   test("renders shipping fee, currency, total amount", () => {
//     // rendering with context
//     renderWithContext(mockValues);

//     // checking the title texts
//     const title = screen.getByText(/cart/i);
//     expect(title).toBeInTheDocument();

//     // checking the subtotal , total and currency
//     const subtotal = screen.getByText(/\$ 120.00/i);
//     expect(subtotal).toBeInTheDocument();
//     const shippingFee = screen.getByText(/\$ 5.00/i);
//     expect(shippingFee).toBeInTheDocument();
//     const total = screen.getByText(/\$ 125.00/i);
//     expect(total).toBeInTheDocument();
//   });
// });
