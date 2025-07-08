import { describe, expect, test } from "vitest";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Testing the Footer.jsx file", () => {
  test("renders logo, title, quick link and contact information", () => {
    //  rending with MemoryRouter for navigation
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    // snapshot matching
    expect(container).toMatchSnapshot();
  });
});
