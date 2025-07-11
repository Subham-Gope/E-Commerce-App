import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ShopContext from "../context/ShopContext";
import Navbar from "./Navbar";

// Mocking the assests
vi.mock("../assets/assets", () => ({
  assets: {
    logo: "logo.png",
    search_icon: "search.png",
    profile_icon: "profile.png",
    cart_icon: "cart.png",
    menu_icon: "menu.png",
    dropdown_icon: "dropdown.png",
  },
}));

// default mock values for context
const defaultMockContext = {
  setShowSearch: vi.fn(),
  getCartCount: () => 0,
  navigate: vi.fn(),
  token: "",
  setToken: vi.fn(),
  setCartItems: vi.fn(),
};

// render with context
const renderWithContext = (ui, customValues = {}) => {
  const contextValue = { ...defaultMockContext, ...customValues };

  return render(
    <MemoryRouter>
      <ShopContext.Provider value={contextValue}>{ui}</ShopContext.Provider>
    </MemoryRouter>
  );
};

describe("Testing the Navbar.jsx file", () => {
  test("renders the navigation menu", async () => {
    // setting up the userEvent
    const user = userEvent.setup({ delay: 1 });

    // rendering and setting up the snapshot matching
    const { container } = renderWithContext(<Navbar />, {});
    expect(container).toMatchSnapshot();

    // checking if logo is rendered
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();

    // checking  home link is rendered
    const homeText = screen.getByText("HOME");
    expect(homeText).toHaveTextContent("HOME");

    // checking the search icon and setShowSearch function
    const searchIcon = screen.getByAltText(/search icon/i);
    expect(searchIcon).toBeInTheDocument();

    // Initiating user interaction
    await user.click(searchIcon);
    expect(defaultMockContext.setShowSearch).toHaveBeenCalled();

    // checking the profile icon and navigate function
    const profileIcon = screen.getByAltText(/profile icon/i);
    expect(profileIcon).toBeInTheDocument();

    await user.click(profileIcon);
    expect(defaultMockContext.navigate).toHaveBeenCalled();

    // checking the menu Icon
    const menuIcon = screen.getByAltText(/menu icon/i);
    expect(menuIcon).toBeInTheDocument();

    // selecting the the responsive sidebar
    const sidebar = screen.getByRole("sidebar");
    expect(sidebar).toBeInTheDocument();

    await user.click(menuIcon);

    expect(sidebar).toHaveClass("w-full");
    const backIcon = screen.getByAltText(/dropdown icon/i);
    expect(backIcon).toBeInTheDocument();

    await user.click(backIcon);

    expect(sidebar).toHaveClass("w-0");
  });
});
