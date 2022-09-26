import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Login from "../../pages/Login";
import { unmountComponentAtNode } from "react-dom";
import exp from "constants";

describe('LoginPage', () => {
    test("render the text on the Login Page", () => {
        // render the login page
        render(<Login />);
        // expect there to be the following text: "Sign in to Account"
        expect(screen.getByText(/Sign in to Account/i)).toBeVisible();
    })

    test("render text on Login Page", () => {
        render(<Login />);
        // expect there to be the following text: "Login with Google"
        expect(screen.getByText(/Login with Google/i)).toBeVisible();
    })

    test("render text on Login Page", () => {
        render(<Login />);
        // expect there to be the following text: "Login with Google"
        expect(screen.getByText(/Or sign in with email account/i)).toBeVisible();
    })

    test("render text on Login Page", () => {
        render(<Login />);
        // expect there to be the following text: "Login with Google"
        expect(screen.getByText(/Join our community!/i)).toBeVisible();
    })

    test("render text on Login Page", () => {
        render(<Login />);
        // expect there to be the following text: "Login with Google"
        expect(screen.getByText(/Fill in your details.../i)).toBeVisible();
    })

    test("render text on Login Page", () => {
        render(<Login />);
        // expect there to be the following text: "Login with Google"
        expect(screen.getByText(/Sign Up/i)).toBeVisible();
    })



    test("render inputboxes on Login Page", () => {
        render(<Login />);
        // expect there to be the following input
        expect(screen.getByPlaceholderText(/Email/i)).toBeVisible();
    })

    test("render inputboxes on Login Page", () => {
        render(<Login />);
        // expect there to be the following input
        expect(screen.getByPlaceholderText(/Password/i)).toBeVisible();
    })
})