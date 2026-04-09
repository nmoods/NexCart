# AGENTS.md - NexCart Monorepo Guide for AI Agents

## Project Overview

**NexCart** is a TypeScript/React monorepo (Turborepo + pnpm) for an e-commerce platform serving three user types:
- **Client**: Landing page & shop interface
- **Admin**: Platform management dashboard  
- **Supplier**: Inventory management dashboard

## Monorepo Architecture

### Workspace Structure (`pnpm-workspace.yaml`)
```
packages:
  - "apps/*"              # Web apps: web/admin, web/client, web/supplier, docs
  - "apps/web/*"          # Nested workspace for shared web configs
  - "packages/*"          # Shared packages: eslint-config, typescript-config, nexcart-design-system
```

### Key Build Tools
- **Turborepo** (v2.9.3): Task orchestration with dependency caching
- **pnpm** (v9.4.0+): Workspace package manager—**always use `pnpm` not `npm`**
- **Vite**: Build tool for all React apps
- **TypeScript** (v5.9.2): Type checking with `tsc -b` before Vite build

### Runtime Ports
- Admin: `localhost:3000`
- Client: `localhost:3001`
- Supplier: `localhost:3002`
- Design System (Storybook): `localhost:3003` (when `pnpm dev` runs)

## Critical Commands

**Root workspace commands** (from `nexcart/` folder):
```bash
pnpm install                # Install all dependencies
pnpm dev                    # Start all apps in watch mode (Turbo TUI)
pnpm build                  # Compile all apps (runs type-check + vite build)
pnpm lint                   # Lint all packages with ESLint
pnpm format                 # Format with Prettier (80 char width, single quotes)
pnpm check-types            # TypeScript type checking only
```

**Individual app commands** (from app directory, e.g., `apps/web/client/`):
```bash
pnpm dev                    # Start Vite dev server on designated port
pnpm build                  # TypeScript compilation + Vite build → dist/
pnpm lint                   # ESLint check (use --fix to auto-repair)
```

## Code Quality & Linting

### ESLint Configuration
- **Base rules**: `packages/eslint-config/base.js` (TypeScript + Prettier integration)
- **React rules**: `packages/eslint-config/react-internal.js` (React Hooks, JSX, no prop-types)
- **Per-app config**: Each app has `eslint.config.js` extending the shared config
- **Pattern**: ESLint v9 flat config format (not `.eslintrc.json`)

### Prettier Rules (`.prettierrc`)
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 80,
  "trailingComma": "es5",
  "endOfLine": "lf"
}
```

**Key conventions**:
- Single quotes for strings (not double)
- Semicolons required
- Unix line endings (LF)
- Max line width: 80 characters

### Adding New Files/Apps
When creating new packages or apps:
1. Create `eslint.config.js` extending `@nexcart/eslint-config/react-internal`
2. Add to root `pnpm-workspace.yaml` if in new directory
3. Run `pnpm install` from root to link dependencies
4. Add `"lint": "eslint ."` script to package.json

## Package Dependencies

### Root Dependencies (`nexcart/package.json`)
- `turbo`: Monorepo orchestration
- `typescript`: Type checking across workspace
- `eslint`, `prettier`: Code quality
- `@nexcart/eslint-config`, `@nexcart/typescript-config`: Shared configs

### Shared Packages (published internally)
- **`@nexcart/eslint-config`**: ESLint configs (base + react-internal)
- **`@nexcart/typescript-config`**: TypeScript configs (base.json, react-library.json)
- **`@nexcart/nexcart-design-system`**: Shared React components (in progress)

### App Dependencies (React 19, TypeScript)
```json
{
  "react": "^19.2.4",
  "react-dom": "^19.2.4",
  "typescript": "~5.9.3"
}
```

**Design system also includes**:
- Storybook 8.0 for component documentation
- Build target: `dist/` for each app/package

## Git & Commit Conventions

### Branch Model (Git Flow)
- `main`: Production only (protected)
- `develop`: Integration branch
- `feature/*`: Feature branches (`git flow feature start <name>`)
- `release/*`: Release candidates
- `hotfix/*`: Urgent fixes from main

### Commit Convention (Angular format)
```
<type>(<scope>): <description>
```
**Types**: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`, `ci`
**Scopes**: `ui`, `web`, `landing`, `api`, `config`

Example: `feat(ui): add button component variants`

## File Organization & Key Paths

```
nexcart/
├── package.json              # Root workspace config
├── turbo.json                # Task definitions (build, dev, lint, check-types)
├── pnpm-workspace.yaml       # Workspace structure
├── eslint.config.js          # Root ESLint config
├── .prettierrc                # Prettier configuration (80 char, single quotes)
├── apps/
│   ├── docs/                 # Documentation app (Vite)
│   └── web/
│       ├── admin/            # Admin dashboard (port 3000)
│       ├── client/           # Client/landing (port 3001)
│       └── supplier/         # Supplier dashboard (port 3002)
└── packages/
    ├── eslint-config/        # Shared ESLint rules
    ├── typescript-config/    # Shared TypeScript configs
    └── nexcart-design-system/ # Component library (Storybook port 3003)
```

## Development Workflow

### Adding a New Feature
1. **Branch**: `git flow feature start <feature-name>`
2. **Edit**: Modify React components in `src/`
3. **Type Check**: `pnpm check-types` (no runtime)
4. **Format**: `pnpm format` (auto-fix code style)
5. **Lint**: `pnpm lint -- --fix` (auto-fix ESLint issues)
6. **Build**: `pnpm build` (TypeScript compile + Vite build)
7. **Test dev**: `pnpm dev` and verify app at localhost
8. **Commit**: Follow Angular convention
9. **Release**: `git flow release start x.y.z` when ready

### Debugging
- ESLint issues: Check `eslint.config.js` in the app and `packages/eslint-config/`
- Build failures: `pnpm build` runs `tsc -b` first—check TypeScript errors
- Port conflicts: Each app has fixed port in `vite.config.ts` under `server.port`
- Missing dependencies: Always `pnpm install` from root, not individual app

## Design System (`@nexcart/nexcart-design-system`)

### Component Structure
Each component in `packages/nexcart-design-system/src/components/<Name>/`:
- `index.tsx`: Component implementation
- `<Name>.stories.tsx`: Storybook story
- Exported from `src/index.ts`

### Running Storybook
```bash
cd packages/nexcart-design-system
pnpm storybook        # Dev mode at localhost:6006
pnpm build-storybook  # Static build
```

### Usage in Apps
Import from `@nexcart/nexcart-design-system` once published/linked.

## TypeScript & Configuration

### Type Checking
```bash
pnpm check-types    # Type check only (no build)
tsc -b              # Used in build script before Vite
```

### Shared TypeScript Configs
- `packages/typescript-config/base.json`: Base settings
- `packages/typescript-config/react-library.json`: React-specific
- Each app extends via `tsconfig.json` → `tsconfig.app.json`

## Environment & Prerequisites

- **Node.js**: ≥v20 LTS (see `engines.node` in root package.json)
- **pnpm**: v9+ (enforced in `packageManager`)
- **Git**: v2.40+ with git-flow support
- **IDE**: VS Code with ESLint + Prettier extensions recommended

## Common Pitfalls

1. **Using `npm` instead of `pnpm`**: Always use `pnpm` for workspace commands
2. **Forgetting `pnpm install`**: After changing dependencies, run from root
3. **Ignoring `turbo.json` caching**: Build outputs are cached; clean with `turbo clean`
4. **Line ending issues**: Ensure `.prettierignore` and LF line endings
5. **ESLint config inheritance**: New apps must import from `@nexcart/eslint-config`
6. **Type mismatches across workspace**: Run `pnpm check-types` before building

## Resources

- **Turborepo docs**: https://turborepo.dev
- **pnpm workspaces**: https://pnpm.io/workspaces
- **Vite**: https://vite.dev
- **ESLint flat config**: https://eslint.org/docs/latest/use/configure/
- **CONFIG_GUIDE.md**: Detailed ESLint & Prettier setup (in nexcart/ root)
- **README.md**: Project phases and component roadmap

