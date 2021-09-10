import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../components/Home';

describe('Check if all components are rendered', () => {
  test('Check text in documents', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(screen.getByText('STATS BY COUNTRY')).toBeInTheDocument();
  });
});
