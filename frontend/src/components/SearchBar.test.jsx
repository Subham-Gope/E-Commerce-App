// import { describe, test, expect, vi } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { MemoryRouter } from "react-router-dom";
// import ShopContext from "../context/ShopContext";
// import SearchBar from "./SearchBar";

// // mocking the assets import
// vi.mock("../assets/assets", () => ({
//   assets: {
//     search_icon: "search_icon.png",
//     cross_icon: "cross_icon.png",
//   },
// }));

// // mock context
// const defaultMockContext = {
//   search: "",
//   setSearch: vi.fn(),
//   showSearch: true,
//   setShowSearch: vi.fn(),
// };

// // render with context function
// const renderWithContext = (value, route, ui) =>
//   render(
//     <MemoryRouter initialEntries={[route]}>
//       <ShopContext.Provider value={value}>{ui}</ShopContext.Provider>
//     </MemoryRouter>
//   );

// describe("Testing the SearchBar.jsx file", () => {
//   test("renders the searchBar", async () => {
//     // setting up the userEvent
//     const user = userEvent.setup();

//     // rendering and setting the snapshot matching
//     const { container } = renderWithContext(
//       defaultMockContext,
//       "/collection/shirt",
//       <SearchBar />
//     );
//     expect(container).toMatchSnapshot();

//     // checking the input , texts, img
//     const input = screen.getByPlaceholderText(/search/i);
//     expect(input).toBeInTheDocument();
//     const crossIcon = screen.getByAltText(/cross icon/i);
//     expect(crossIcon).toBeInTheDocument();
//     const searchIcon = screen.getByAltText(/cross icon/i);
//     expect(searchIcon).toBeInTheDocument();

//     // Initiating the user interaction
//     await user.click(crossIcon);
//     expect(defaultMockContext.setShowSearch).toHaveBeenCalled();
//   });
// });
