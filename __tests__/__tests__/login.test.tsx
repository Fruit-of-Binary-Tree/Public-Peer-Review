import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Login from "../../pages/Login";
import { unmountComponentAtNode } from "react-dom";
import exp from "constants";

describe('LoginPage', () => {

    test("Sign in Text", () => {
        // render the login page
        render(<Login />);
        expect(screen.getByText(/Sign in to Account/i)).toBeVisible();
    })

    test("Google Login", () => {
        render(<Login />);
        expect(screen.getByText(/Login with Google/i)).toBeVisible();
    })

    test("Email Login", () => {
        render(<Login />);
        expect(screen.getByText(/Or sign in with email account/i)).toBeVisible();
    })

    test("Sign Up Text", () => {
        render(<Login />);
        expect(screen.getByText(/Join our community!/i)).toBeVisible();
    })

    test("Enter Details", () => {
        render(<Login />);
        expect(screen.getByText(/Fill in your details.../i)).toBeVisible();
    })

    test("Sign Up button", () => {
        render(<Login />);
        expect(screen.getByText(/Sign Up/i)).toBeVisible();
    })



    test("Email Input", () => {
        render(<Login />);
        // accept input
        expect(screen.getByPlaceholderText(/Email/i)).toBeVisible();
    })

    test("Password Input", () => {
        render(<Login />);
        // accept input
        expect(screen.getByPlaceholderText(/Password/i)).toBeVisible();
    })
})