import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import '../index.css';
import STORE from '../store';

//make the App component available
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
      // Create a DOM element to render the component into
      const div = document.createElement('div');
      // Render the component
      // If something is wrong it will fail here
      // ReactDOM.render(<App />, div);
      ReactDOM.render(<App store={STORE}/>, div);
      // Clean up
    ReactDOM.unmountComponentAtNode(div);
  })
  it('renders without crashing', () => {
    // Render the component, as JSON
    const tree = renderer.create(<App store={STORE} />).toJSON();
    // Check whether it matches the previous snapshot
    // Stored in __snapshots__/App.test.js.snap
    expect(tree).toMatchSnapshot();
  });
});