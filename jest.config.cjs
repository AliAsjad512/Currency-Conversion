// module.exports = {
//     transform: {
//       '^.+\\.jsx?$': ['babel-jest', { presets: ['@babel/preset-react'] }]
//     }
//   };

module.exports = {
    testEnvironment: 'node',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
   
    globals: {
      'process.env': {
        NODE_ENV: 'test',
      },
    },
    preset: 'ts-jest',
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    moduleDirectories: ['node_modules', '<rootDir>/src'],
    verbose: true,
  };
  

