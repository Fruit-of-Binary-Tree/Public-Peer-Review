import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PostBox from "../../components/PostBox";
import { unmountComponentAtNode } from "react-dom";

describe('basic input component', () => {
    it("Checks if PostBox page is rendered", () => {
        const div = document.createElement("div");
        render(<PostBox />);
        unmountComponentAtNode(div);
    })

    it("render a placeholder", () => {
        //const placeholder_text = <input placeholder="Post your work!" />;
        render(<PostBox />);
        screen.queryAllByPlaceholderText(/Post your work!/i);
    })

})