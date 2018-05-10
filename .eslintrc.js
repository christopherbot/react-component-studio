module.exports = {
  root: true,

  plugins: ['react'],

  env: {
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },

  settings: {
    'import/ignore': [
      'node_modules',
      '\\.(json|css|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)$',
    ],
    'import/extensions': ['.js'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    }
  },

  rules: {
    semi: 0,
    'no-param-reassign': 0,
    'max-len': [2, 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'func-names': ['error', 'always'],
    'no-constant-condition': 0,
    'no-unused-expressions': 0,
    'import/no-named-as-default': 0,
    'consistent-return': ['error', { 'treatUndefinedAsUnspecified': true }]
  }
}
