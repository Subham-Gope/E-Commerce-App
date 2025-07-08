import { describe, expect, test } from "vitest";
import { screen, render } from "@testing-library/react";
import ShopContext from "../context/ShopContext";
import CartTotal from "./CartTotal";

// Reusable render function
const renderWithContext = (value) => {
  return render(
    <ShopContext.Provider value={value}>
      <CartTotal />
    </ShopContext.Provider>
  );
};

// creating mock values
const mockValues = {
  curreny: "$",
  delivery_fee: 5,
  getCartAmount: () => 120,
};

describe("Testing the CartTotal.jsx file", () => {
  test("renders shipping fee, currency, total amount", () => {
    // rendering with context
    renderWithContext(mockValues);

    
  });
});
