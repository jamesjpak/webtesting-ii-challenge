import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import Dashboard from './components/Dashboard';
// import { render, fireEvent } from '@testing-library/react'; // << install this
// import '@testing-library/react/cleanup-after-each';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // describe('Strike Button', () => {
  //   it('when clicked adds one to the strike count in state', () => {
  //     const { getByText, queryByText } = render(<App />);
  //     // find the button
  //     const button = getByText(/strike/i);
  
  //     // click it
  //     fireEvent.click(button);
  
  //     // confirm that "hello developers" is there
  //     expect(queryByText(/strikes 1/i)).toBeTruthy();
  //   });
  // });
})


