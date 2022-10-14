import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Post from "../../pages/CreatePost";
import { unmountComponentAtNode } from "react-dom";

describe('basic input component', () => {
    it("render without crashing", () => {
        const div = document.createElement("div");
        render(<Post />);
        unmountComponentAtNode(div);
    })

    

})