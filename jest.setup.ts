// @ts-nocheck
import 'jest-axe/extend-expect';

global.window = Object.create(window);

global.fetch = jest.fn().mockResolvedValue({
  json: () => Promise.resolve([]),
});
