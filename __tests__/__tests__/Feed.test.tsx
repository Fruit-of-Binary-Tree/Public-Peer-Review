import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import List from "../../components/Feed";
import { unmountComponentAtNode } from "react-dom";

describe('basic input component', () => {
    it("render without crashing", () => {
        const div = document.createElement("div");
        render(<List />);
        unmountComponentAtNode(div);
    })


})