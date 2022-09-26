import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Post from "../../pages/Post";
import { unmountComponentAtNode } from "react-dom";

describe('Post Page', () => {

    test("Render text on Post Page", () => {
        render(<Post key={undefined} id={undefined} username={undefined} caption={undefined} title={undefined} author={undefined} url={undefined} viewPdf={undefined} doc={undefined} />);

        expect(screen.getByText(/We need the name of the user/i)).toBeVisible();
    })

    test("Post Button", () => {
        render(<Post key={undefined} id={undefined} username={undefined} caption={undefined} title={undefined} author={undefined} url={undefined} viewPdf={undefined} doc={undefined} />);

        expect(screen.getByText(/Post/i)).toBeVisible();
    })

    test("Test adding comment", () => {
        render(<Post key={undefined} id={undefined} username={undefined} caption={undefined} title={undefined} author={undefined} url={undefined} viewPdf={undefined} doc={undefined} />);

        expect(screen.getByPlaceholderText(/Add a comment/i)).toBeVisible();
    })

    test("Title and Url", () => {

        const { container } = render(<Post key={undefined} id={undefined} username={undefined} caption={undefined} title={undefined} author={undefined} url={undefined} viewPdf={undefined} doc={undefined} />);

        const truncate = container.getElementsByClassName('p-5 truncate')
        expect(truncate.length).toBe(2);
    })

})