import React from 'react';
import { render, screen,   } from '@testing-library/react';
import Footer from './Footer';

const COMPONENT_TO_TEST = "Footer";
const TEST_1_DESCRIPTION = `${COMPONENT_TO_TEST} - render current year on footer`;


test(TEST_1_DESCRIPTION, () => {
    //given
    const expectedYear = new Date().getFullYear().toString();

    //when
    render(<Footer />);
    
    //then
    const expectedValue = screen.getByText(expectedYear, {exact: false});
    expect(expectedValue).toBeInTheDocument()
});