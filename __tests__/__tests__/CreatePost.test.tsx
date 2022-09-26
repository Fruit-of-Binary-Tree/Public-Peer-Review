import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Post from "../../pages/CreatePost";
import { unmountComponentAtNode } from "react-dom";

describe('CreatePost', () => {
    test('Author Input', () => {
        render(<Post />);
        expect(screen.getByPlaceholderText(/Author/i)).toBeVisible();
    })

    test('University Input', () => {
        render(<Post />);
        expect(screen.getByPlaceholderText(/University/i)).toBeVisible();
    })

    test('Title Input', () => {
        render(<Post />);
        expect(screen.getByPlaceholderText(/Title/i)).toBeVisible();
    })

    test('Citations Input', () => {
        render(<Post />);
        expect(screen.getByPlaceholderText(/Citations/i)).toBeVisible();
    })

    test('Description Input', () => {
        render(<Post />);
        expect(screen.getByPlaceholderText(/Description of publication/i)).toBeVisible();
    })

    test('Url Input', () => {
        render(<Post />);
        expect(screen.getByPlaceholderText(/Url/i)).toBeVisible();
    })

})