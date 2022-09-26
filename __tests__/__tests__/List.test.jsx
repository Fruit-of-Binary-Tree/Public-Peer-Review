import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import List from "../../components/List";
import { unmountComponentAtNode } from "react-dom";

describe('ListView', () => {
    test("List View Exists", () => {
        // render the login page
        render(<List />);
        // expect there to be the following text: "Sign in to Account"
        expect(screen.getByText(/List:/i)).toBeVisible();
    })

})