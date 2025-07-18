// import { describe, test, expect, vi } from "vitest";
// import { render, screen } from "@testing-library/react";
// import OurPolicy from "./OurPolicy";

// // Mocking assets import
// vi.mock("../assets/assets", () => ({
//   assets: {
//     exchange_icon: "exchange_icon.png",
//     quality_icon: "quality_icon.png",
//     support_img: "support_img.png",
//   },
// }));

// describe("Testing the OurPolicy.jsx file", () => {
//   test("rendering the texts", () => {
//     // rendering and setting up the snapshot matching
//     const { container } = render(<OurPolicy />);
//     expect(container).toMatchSnapshot();

//     //checking the headings
//     expect(screen.getByText(/easy exchange policy/i)).toBeInTheDocument();
//     expect(screen.getByText(/7 days return policy/i)).toBeInTheDocument();
//     expect(screen.getByText(/best customer support/i)).toBeInTheDocument();

//     // checking descriptions
//     expect(
//       screen.getByText(/we offer hassle free exchange policy/i)
//     ).toBeInTheDocument();
//     expect(
//       screen.getByText(/We provide 7 days of free return policy/i)
//     ).toBeInTheDocument();

//     expect(
//       screen.getByText(/we provide 24\/7 customer support/i)
//     ).toBeInTheDocument();

//     // checking images
//     const images = screen.getAllByAltText(/icon/i);
//     expect(images).toHaveLength(3);

//     expect(images[0]).toHaveAttribute("src", "exchange_icon.png");
//     expect(images[1]).toHaveAttribute("src", "quality_icon.png");
//     expect(images[2]).toHaveAttribute("src", "support_img.png");
//   });
// });
