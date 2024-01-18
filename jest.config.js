module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest-setup.ts'],
  testMatch: [
    "<rootDir>/__tests__/**/*.test.tsx",
     "<rootDir>/src/**/*.test.tsx",
    ]
};
