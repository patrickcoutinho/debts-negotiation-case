import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  projects: [
    '<rootDir>/frontend/*/jest.config.ts',
    '<rootDir>/shared/*/jest.config.ts',
  ],
};

export default config;
