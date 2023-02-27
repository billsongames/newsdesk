import { render } from '@testing-library/react';
import App from './Components/App';

test('App renders correctly', () => {
  const {content} =  render(<App />);
  
  expect(content).toMatchSnapshot()
});
