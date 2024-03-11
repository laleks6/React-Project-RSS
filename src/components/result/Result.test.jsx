import React from 'react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Result from './Result';
import Card from './Card';
import LocaleContext from '../context/LocaleContext';

const data = [
  {
    name: '1',
    mealType: '',
    difficulty: '',
    ingredients: '',
    instructions: '',
    rating: 0,
    image: '',
  },
  {
    name: '2',
    mealType: '',
    difficulty: '',
    ingredients: '',
    instructions: '',
    rating: 0,
    image: '',
  },
  {
    name: '3',
    mealType: '',
    difficulty: '',
    ingredients: '',
    instructions: '',
    rating: 3,
    image: '',
  },
];

describe('Result component', () => {
  it('Verify that the component renders the specified number of cards', () => {
    render(
      <LocaleContext.Provider value={{ data }}>
        <Result loading />
      </LocaleContext.Provider>
    );
    expect(screen.getByText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/2/i)).toBeInTheDocument();
    expect(screen.getByText(/3/i)).toBeInTheDocument();
    screen.debug();
  });

  it('Check that an appropriate message is displayed if no cards are present', () => {
    render(
      <LocaleContext.Provider value={{ data: false }}>
        <Result loading />
      </LocaleContext.Provider>
    );
    expect(screen.getByText(/Not found/i)).toBeInTheDocument();
    screen.debug();
  });
});

describe('Card component', () => {
  it('Verify that the component renders the specified number of cards', () => {
    // render(<Card key={`${1}`} data={data[1]} index={1} />);
    render(
      <LocaleContext.Provider value={{ data }}>
        <Result loading />
      </LocaleContext.Provider>
    );

    const card = screen.queryByTestId('click-card_1');
    screen.debug();
    expect(screen.queryByTestId('active--card')).toBeNull();
    expect(screen.queryByTestId('click-card_1')).toBeInTheDocument();
    expect(screen.queryByTestId('active--card')).toBeNull();
    fireEvent.click(screen.queryByTestId('click-card_1'));
    // expect(screen.queryByTestId('active--card')).toBeInTheDocument();
    screen.debug();
  });
});
