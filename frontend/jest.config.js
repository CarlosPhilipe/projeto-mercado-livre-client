module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/', '/server/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js']
} 
