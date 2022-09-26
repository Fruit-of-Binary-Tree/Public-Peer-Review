import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";
import { unmountComponentAtNode } from "react-dom";

describe('basic input component', () => {
    it("Checks if component header is present", () => {
        const div = document.createElement("div");
        render(<Header />);
        unmountComponentAtNode(div);
    })


})