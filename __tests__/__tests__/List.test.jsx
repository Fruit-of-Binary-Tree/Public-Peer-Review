import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import List from "../../components/List";
import { unmountComponentAtNode } from "react-dom";

describe('basic input component', () => {
    it("Checks if the list of objects is loaded", () => {
        const div = document.createElement("div");
        render(<List />);
        unmountComponentAtNode(div);
    })


})