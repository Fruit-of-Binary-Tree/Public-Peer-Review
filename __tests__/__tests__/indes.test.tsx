import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";
import { unmountComponentAtNode } from "react-dom";

describe('basic input component', () => {
    it("Checks for navigation between pages", () => {
        const div = document.createElement("div");
        render(<Home />);
        unmountComponentAtNode(div);
    })

})