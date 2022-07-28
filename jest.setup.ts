// @ts-nocheck
import 'jest-axe/extend-expect';
import '@testing-library/jest-dom';

global.window = Object.create(window);

global.fetch = jest.fn().mockResolvedValue({
  json: () => Promise.resolve([]),
});
