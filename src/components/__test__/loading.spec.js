import React from 'react';
import {render} from '@testing-library/react-native';
import Loading from '../loading';

describe('Loading', () => {
  beforeEach(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('should render Loading correctly', () => {
    const {toJSON} = render(<Loading />);

    expect(toJSON()).toMatchSnapshot();
  });
});
