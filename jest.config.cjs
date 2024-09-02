module.exports = {
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', __dirname],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
}
