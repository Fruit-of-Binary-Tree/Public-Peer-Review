import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home";
import { unmountComponentAtNode } from "react-dom";

describe('HomePage', () => {

    test("Create a post", () => {
        render(<Home />)
        expect(screen.getByText(/Create a Post/i)).toBeVisible();
    })

    test("Welcome message", () => {
        render(<Home />)
        expect(screen.getByText(/Welcome to Genius Reviews, post your academic work and let your peers give you feedback/i)).toBeVisible();
    })


})