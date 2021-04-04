import React from 'react';
import {render} from '@testing-library/react-native';
import Detail from '../details';

describe('Detail', () => {
  beforeEach(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('should render Detail correctly', () => {
    const {toJSON} = render(<Detail />);

    expect(toJSON()).toMatchSnapshot();
  });
});
