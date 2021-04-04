import React from 'react';
import {render} from '@testing-library/react-native';
import Home from '../home';

describe('Home', () => {
  beforeEach(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('should render Home correctly', () => {
    const {toJSON} = render(<Home />);

    expect(toJSON()).toMatchSnapshot();
  });
});
