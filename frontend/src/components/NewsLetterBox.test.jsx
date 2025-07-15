// import { describe, expect, test, vi } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import NewsLetterBox from "./NewsLetterBox";

// describe("Testing the NewsLetterBox.jsx file", () => {
//   test("renders news letter subscribe form", async () => {
//     // setting up userEvent
//     const user = userEvent.setup();

//     //rendering and setting up the snapshot matching
//     const { container } = render(<NewsLetterBox />);
//     expect(container).toMatchSnapshot();

//     // CHecking the description texts
//     const text1 = screen.getByText(/subscribe now & get 20% off/i);
//     expect(text1).toBeInTheDocument();
//     expect(text1).toHaveTextContent(/20% off/i);

//     const text2 = screen.getByText(/limited-time offer!/i);
//     expect(text2).toBeInTheDocument();
//     expect(text2).toHaveTextContent(/don’t miss out on/i);

//     // Initiating user interaction
//     const btn = screen.getByRole("button", { name: /subscribe/i });
//     const input = screen.getByPlaceholderText(/enter your email/i);
//     expect(input).toBeInTheDocument();
//     expect(btn).toBeInTheDocument();

//     // Listening for form submit
//     const form = screen.getByRole("form");
//     expect(form).toBeInTheDocument();

//     const submitListerner = vi.fn((e) => e.preventDefault());
//     form.addEventListener("submit", submitListerner);

//     await user.type(input, "gigachad@contact.com");
//     await user.click(btn);

//     expect(submitListerner).toHaveBeenCalled();
//   });
// });
