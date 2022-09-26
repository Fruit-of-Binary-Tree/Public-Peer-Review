import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home";
import { unmountComponentAtNode } from "react-dom";

describe('basic input component', () => {
    it("checks if the sign in page is loaded", () => {
        const div = document.createElement("div");
        render(<Home />);
        unmountComponentAtNode(div);
    })


})