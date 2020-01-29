import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import ConnectedApp, { Home }  from '../pages/Home';

afterEach(cleanup);

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')
  return {
    ...originalModule,
    BrowserRouter: ({ children }) => (<div> {children} </div>),
  }
});

function renderWithRouter(
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

describe('Home', () => {
  describe('Play Game Button', () => {
    test('when clicked must redirect to game', () => {
      const { debug } = renderWithRouter(<Home />)
      debug()
    })
  })
})

// describe('Pokedex', () => {

//       for (let crossnFn = 0; crossnFn <= pokemonsMock.length; crossnFn += 1) {
//         const { history, getByText, getByRole } = renderWithRouter(<Pokedex pokemons={pokemonsMock} isPokemonFavoriteById={isPokemonFavoriteByIdMock} />);
        
//         expect(history.location.pathname).toBe('/');
        
//         for (let pressButton = 0; pressButton < crossnFn; pressButton += 1) {
//           fireEvent.click(getByText(/Próximo pokémon/i));
//         };
        
//         if (crossnFn === pokemonsMock.length) {
//           fireEvent.click(getByRole('link'));
//           expect(history.location.pathname).toBe(`/pokemons/${pokemonsMock[0].id}`);

//         } else {
//           fireEvent.click(getByRole('link'));
//           expect(history.location.pathname).toBe(`/pokemons/${pokemonsMock[crossnFn].id}`);
//         };
        
//         cleanup();
//       };
//     });
//   })
