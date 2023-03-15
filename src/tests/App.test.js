import { render } from '@testing-library/react';
import App from '../Components/App';

describe('Name of the group', () => {
  beforeEach(() => {
    const script = document.createElement('script');
    document.body.appendChild(script);
  })
  it('App renders correctly', () => {
    const { asFragment } =  render(<App />);
    
    expect(asFragment()).toMatchSnapshot()
  });
});
