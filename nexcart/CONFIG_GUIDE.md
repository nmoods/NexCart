# ESLint & Prettier Configuration Guide

## Overview

This monorepo uses a centralized ESLint and Prettier configuration for consistency across all packages and apps.

## Configuration Files Created

### ESLint
- **`eslint.config.js`** (root) - Root-level ESLint configuration
- **`packages/eslint-config/base.js`** - Base ESLint rules for the entire workspace
- **`packages/eslint-config/react-internal.js`** - React-specific rules extended by all apps
- **`.eslintignore`** - Files/folders to ignore during linting
- Individual `eslint.config.js` in each app/package - App-specific ESLint configs that extend shared configs

### Prettier
- **`.prettierrc`** (root) - Prettier formatting rules (JSON format)
- **`.prettierignore`** - Files/folders to ignore during formatting

## Configuration Details

### Prettier Rules (.prettierrc)
```json
{
  "semi": true,                    // Add semicolons
  "trailingComma": "es5",          // Trailing commas in ES5 compatible objects
  "singleQuote": true,             // Use single quotes
  "printWidth": 80,                // Wrap lines at 80 characters
  "tabWidth": 2,                   // 2 spaces per indentation
  "useTabs": false,                // Use spaces, not tabs
  "arrowParens": "always",         // Always use parentheses for arrow functions
  "endOfLine": "lf"                // Unix line endings
}
```

### ESLint Configuration

#### Base Rules (packages/eslint-config/base.js)
- ESLint recommended rules
- TypeScript ESLint recommended rules
- Prettier integration
- Turbo plugin for monorepo support
- Ignores: dist/, build/, node_modules/, coverage/

#### React Rules (packages/eslint-config/react-internal.js)
- All base rules
- React ESLint recommended rules
- React Hooks rules
- React refresh rules
- React prop-types disabled (modern React)
- React scope validation disabled (new JSX transform)

## Usage

### Run Linting
```bash
# Lint all packages/apps
pnpm lint

# Lint specific package
cd apps/web/client && pnpm lint

# Fix ESLint issues automatically
pnpm lint -- --fix
```

### Run Formatting
```bash
# Format all files
pnpm format

# Format specific file
npx prettier --write src/App.tsx
```

### Scripts in Root package.json
```json
{
  "lint": "turbo run lint",
  "format": "prettier --write \"**/*.{ts,tsx,md}\""
}
```

## Adding to New Apps/Packages

When creating a new app or package:

1. **Create `eslint.config.js`:**
```javascript
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
]
```

2. **Add to package.json:**
```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

## File Structure Reference

```
nexcart/
├── eslint.config.js               (root workspace config)
├── .eslintignore                  (root ignore file)
├── .prettierrc                     (prettier config)
├── .prettierignore                (prettier ignore file)
├── package.json                   (root - has eslint & prettier deps)
├── packages/
│   └── eslint-config/
│       ├── base.js                (base rules)
│       ├── react-internal.js      (react rules)
│       └── package.json
├── apps/
│   ├── docs/
│   │   ├── eslint.config.js       (uses @nexcart/eslint-config/react-internal)
│   │   └── package.json
│   └── web/
│       ├── admin/
│       │   ├── eslint.config.js   (uses @nexcart/eslint-config/react-internal)
│       │   └── package.json
│       ├── client/
│       │   ├── eslint.config.js   (uses @nexcart/eslint-config/react-internal)
│       │   └── package.json
│       └── supplier/
│           ├── eslint.config.js   (uses @nexcart/eslint-config/react-internal)
│           └── package.json
```

## IDE Integration

### VS Code

Install these extensions:
- **ESLint** - dbaeumer.vscode-eslint
- **Prettier** - esbenp.prettier-vscode

Add to `.vscode/settings.json`:
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Pre-commit Hooks (Optional)

To enforce linting and formatting before commits, install husky and lint-staged:

```bash
pnpm install -D husky lint-staged
npx husky install
```

Create `.husky/pre-commit`:
```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

Add to root `package.json`:
```json
{
  "lint-staged": {
    "**/*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"],
    "**/*.md": ["prettier --write"]
  }
}
```

## Troubleshooting

### ESLint not finding shared config
- Ensure `@nexcart/eslint-config` is listed in dependencies in app's `package.json`
- Run `pnpm install` in the root directory

### Prettier conflicts with ESLint
- The `eslint-config-prettier` package disables ESLint rules that conflict with Prettier
- This is already configured in both base and react-internal configs

### Format differences between dev and CI
- Ensure both run the same Prettier version
- Check for `.prettierrc` overrides in subdirectories (there should be none)

## Resources

- [ESLint Configuration](https://eslint.org/docs/latest/use/configure/)
- [Prettier Options](https://prettier.io/docs/en/options.html)
- [TypeScript ESLint](https://typescript-eslint.io/)

