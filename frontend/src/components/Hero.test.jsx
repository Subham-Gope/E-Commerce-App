// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import Hero from "./Hero";

// describe("Testing the Hero.jsx file", () => {
//   test("render the hero title, description and image", () => {
//     // rendering and setting snapshot matching
//     const { container } = render(<Hero />);
//     expect(container).toMatchSnapshot();

//     // checking for the title and text
//     const heroTitle = screen.getByText(/latest arrivals/i);
//     expect(heroTitle).toBeInTheDocument();
//     const heroText1 = screen.getByText(/our best seller/i);
//     expect(heroText1).toBeInTheDocument();
//     const heroText2 = screen.getByText(/shop now/i);
//     expect(heroText2).toBeInTheDocument();
//   });

//   //   checking for image
//   const heroImage = screen.getByAltText(/hero image/i);
//   expect(heroImage).toBeInTheDocument();
// });
