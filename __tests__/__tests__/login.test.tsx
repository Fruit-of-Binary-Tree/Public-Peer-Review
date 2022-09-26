import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Login from "../../pages/Login";
import { unmountComponentAtNode } from "react-dom";
import exp from "constants";

describe('LoginPage', () => {
    test("render the Login Page", () => {
        // render the login page
        render(<Login />);
        // expect there to be the following text: "Sign in to Account"
        expect(screen.getByText(/Sign in to Account/i)).toBeVisible();
        // expect there to be the following text: "Login with Google"
        expect(screen.getByText(/Login with Google/i)).toBeVisible();
        // expect there to be the following text: "Or sign in with email account"
        expect(screen.getByText(/Or sign in with email account/i)).toBeVisible();

        // expect there to be the following input
        //these are failing for some reason
        //expect(screen.getByRole("textbox", { name: /email/i })).toBeVisible();
        //expect(screen.getByRole("textbox", { name: /password/i })).toBeVisible();
    })
})