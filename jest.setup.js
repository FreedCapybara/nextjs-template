import * as jest from 'jest';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('next/link', () => {
  return ({children}) => {
    return children;
  };
});

jest.mock('react-ga', () => {
  return {
    initialize: () => {},
    event: () => {},
    set: () => {},
    pageview: () => {}
  };
});

