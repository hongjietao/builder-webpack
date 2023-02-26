module.exports = {
  parser: '@babel/eslint-parser',
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'require-config': 'false',
    'linebreak-style': 0,
    'import/newline-after-import': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': 'off',
    'jsx-a11y/alt-text': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'lit-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'arrow-body-style': 'off',
    'no-console': 'off',
    'lines-around-directive': 'off',
  },
};
