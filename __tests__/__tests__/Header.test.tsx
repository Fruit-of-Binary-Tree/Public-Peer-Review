import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";
import { unmountComponentAtNode } from "react-dom";

describe('Header', () => {

    test("Search Box", () => {
        render(<Header />);
        expect(screen.getByPlaceholderText(/Search Peer Review/i)).toBeVisible();
    })

    test("Logout Button", () => {
        render(<Header />);
        expect(screen.getByRole("button", { name: /Signout/i })).toBeVisible();
    })


})