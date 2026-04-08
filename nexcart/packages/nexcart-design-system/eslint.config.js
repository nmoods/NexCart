import globals from 'globals'
import reactRefresh from 'eslint-plugin-react-refresh'
import { config as baseConfig } from '@nexcart/eslint-config/react-internal'

export default [
  ...baseConfig,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'react-refresh/only-export-components': 'warn',
    },
    plugins: {
      'react-refresh': reactRefresh,
    },
  },
  {
    ignores: ['dist/**', 'build/**'],
  },
]
