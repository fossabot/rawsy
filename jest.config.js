module.exports = {
    bail: true,
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'components/**/*.{js,ts,tsx}',
        '!**/*-test.{js,ts,tsx}',
    ],
    coverageReporters: ['json', 'lcov'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    projects: ['<rootDir>/components/*/jest.config.js'],

};