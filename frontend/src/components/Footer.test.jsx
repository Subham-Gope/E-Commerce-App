// import { describe, expect, test } from "vitest";
// import { screen, render } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import Footer from "./Footer";

// describe("Testing the Footer.jsx file", () => {
//   test("renders logo, title, quick link and contact information", () => {
//     //  rending with MemoryRouter for navigation
//     const { container } = render(
//       <MemoryRouter>
//         <Footer />
//       </MemoryRouter>
//     );

//     // snapshot matching
//     expect(container).toMatchSnapshot();

//     // verifying logo is displayed
//     const logo = screen.getByAltText(/logo/i);
//     expect(logo).toBeInTheDocument();

//     // verifying if the description is displayed
//     const description = screen.getByText(/forever e-commerce/i);
//     expect(description).toBeInTheDocument();

//     // verifying if the quicklinks  is displayed
//     const home = screen.getByText(/home/i);
//     expect(home).toBeInTheDocument();
//     const email = screen.getByText("Contact@forever.com");
//     expect(email).toBeInTheDocument();

//     // verifying copyright text is displayed
//     const copyrightText = screen.getByText(
//       "Copyrights 2024 @forever.com - All Rights Reserved"
//     );
//     expect(copyrightText).toBeInTheDocument();
//   });
// });
