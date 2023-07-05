import React from 'react';
import { render, screen,  } from '@testing-library/react';
import Header from './Header';

const COMPONENT_TO_TEST = "Header";
const TEST_1_DESCRIPTION = `${COMPONENT_TO_TEST} - render header image`;


test(TEST_1_DESCRIPTION, () => {
    //given
    

    //when
    render(<Header />);
    
    //then
    const retrievedValue = document.querySelector("img") as HTMLImageElement;
    expect(retrievedValue).toBeInTheDocument()
});