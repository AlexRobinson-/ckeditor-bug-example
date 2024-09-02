module.exports = {
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', __dirname],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    'ckeditor5-react$': '<rootDir>/node_modules/@ckeditor/ckeditor5-react/dist/index.umd.cjs',
    'ckeditor5': '<rootDir>/node_modules/ckeditor5/dist/browser/ckeditor5.umd.js',
  }

}
