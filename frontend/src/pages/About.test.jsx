import { describe, expect, test, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import * as assetsModule from "../assets/assets";
import About from "./About";

// Mocking the title component
vi.mock("../components/Title", () => ({
  default: ({ text1, text2 }) => (
    <h2 data-testid="title">
      {text1} {text2}
    </h2>
  ),
}));

// Mocking the Newaletter component
vi.mock("../components/NewsLetterBox", () => ({
  default: () => {
    return <div data-testid="newsletter-box">Newsletter Box</div>;
  },
}));

describe("Testing the About.jsx file", () => {
  test("renders the about page along with the text and newletter component", () => {
    // mocking the assets object to control the image used in the component
    vi.spyOn(assetsModule, "assets", "get").mockReturnValue({
      about_img: "mock-about-image.png",
    });

    // rendering and setting up the snapshot matching
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();

    // checking the title component mock is rendered
    const titles = screen.getAllByTestId(/title/i);
    expect(titles).toBeTruthy();
    expect(titles).toHaveLength(2);
    expect(titles[0]).toHaveTextContent(/about us/i);
    expect(titles[1]).toHaveTextContent(/why choose us/i);

    // checking the images are rendered
    const aboutImage = screen.getByAltText(/about-image/i);
    expect(aboutImage).toBeInTheDocument();
    expect(aboutImage).toHaveAttribute("src", "mock-about-image.png");

    // checking the  descriptions are displayed
    expect(
      screen.getByText(/forever brings you timeless fashion and lifestyle/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Rediscover shopping with Forever!/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Our mission at Forever is to create timeless/i)
    ).toBeInTheDocument();

    // checking the titles and descriptions
    expect(screen.getByText(/Quality Assurance:/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Our mission in Quality Assurance is to ensure/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/Convenience:/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /At Forever, we prioritize convenience by offering a seamless/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Exceptional Customer Service:/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Forever is dedicated to providing exceptional/i)
    ).toBeInTheDocument();

    // checking the newsletter component is rendered

    const newsLetter = screen.getByTestId("newsletter-box");
    expect(newsLetter).toBeInTheDocument();
  });
});
