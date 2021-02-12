import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';
import "@testing-library/jest-dom";
import { act } from 'react-dom/test-utils';


test('renders without errors', async () => {
    render(<ContactForm />);
});

test('test input functionality', async () => {

});

test('form input validation and submission', async () => {
    
    render(<ContactForm />);

    // Grab our inputs
    // Added an id to firstName + changed the id for email from lastName to email.

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    const messageInput = screen.getByRole('textbox', {name: /message/i});

    // Enter text into our inputs

    userEvent.type(firstNameInput, 'Paul');
    userEvent.type(lastNameInput, 'St.Germain');
    userEvent.type(emailInput, 'test@email.com');
    userEvent.type(messageInput, 'Something');


    // Select & Click our button

    // NOTES: An input was used in place of a button - these have no role.
    // Instead, I added a targetable testid for a higher priority selection of our submit input

    const button = screen.getByTestId(/submit/i);

    userEvent.click(button);

    // Check that the form submission had the intended result of displaying our data on the screen

    const firstNameResult = screen.findByText(/paul/i);

    expect(await firstNameResult).toBeInTheDocument();
    
    // FINAL NOTES & OBSERVATIONS
    /** Upon attempting to set up the tests I ran into some issues which pointed me in the direction of issues with the HTML doc's setup:
     * 
     *  1. The firstName input had no ID.
     *  2. The email input had an ID of lastName
     *  3. The submit button is actually an input which, having no role, cannot be selected the most appropriate way.
     * 
     * Once these issues were fixed, and a test was run with reasonable potential user input, I found a couple issues with this form's functionality itself:
     * 
     *  1. The firstName field had an unreasonable maxLength of 3 characters.
     *  2. The email field has no validation established to ensure that a proper email address is being input.
     * NOTE: Come back and attempt to fix this one. ^
     */
})