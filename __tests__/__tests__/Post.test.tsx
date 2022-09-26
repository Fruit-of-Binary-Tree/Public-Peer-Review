import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Post from "../../pages/Post";
import { unmountComponentAtNode } from "react-dom";

describe('basic input component', () => {
    it("Checks if a post gets sent and rendered", () => {
        const div = document.createElement("div");
        render(<Post key={undefined} id={undefined} username={undefined} caption={undefined} title={undefined} author={undefined} url={undefined} viewPdf={undefined} doc={undefined} />);
        unmountComponentAtNode(div);
    })

})