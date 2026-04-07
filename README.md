# NexCart — E-Commerce Monorepo

> A full-featured e-commerce platform built as a monorepo with a shared design system published as an npm library.

**PROJECTS AND LOCALHOST PORTS**

```
- @nexcart/admin : 3000
- @nexcart/client : 3005
- @nexcart/supplier : 3010
- @nexcart/nexcart-design-system : 6969
```
- 
## Quick Overview

**NexCart** is a monorepo (Turborepo + pnpm) serving three user types: **Clients** (browse/purchase), **Suppliers** (manage inventory), and **Admins** (platform oversight).

```
NexCart/
├── apps/
│   ├── web/        # React.js (Admin, Supplier, Client dashboards)
│        ├──        # Admin
│        ├──        # Supplier
│        └──        # Client(Landing Page)
├── packages/
│   ├── nexcart-design-system        # @nexcart/ui — Design System (npm library)
│   ├── eslint-config/
│   └── tsconfig/
├── turbo.json, pnpm-workspace.yaml, package.json
```

## Prerequisites

| Tool | Min Version |
|------|-------------|
| Node.js | v20 LTS |
| pnpm | v9+ |
| Git | v2.40+ |
| git-flow (AVH) | latest |


## Phase 0–1: Setup
- Technology to be used 
- React, Typescript,node
- 
## Phase 2: GitFlow

```bash
git init && git add . && git commit -m "chore: initial scaffold"
git checkout -b develop && git push -u origin develop
git flow init  # Accept defaults
```

**Branch Model:**
- `main` — Production only. Protected.
- `develop` — Integration branch.
- `feature/*` — Feature branches.
- `release/*` — Release prep.
- `hotfix/*` — Hotfixes from main.

**Commit Convention:**
```
Angular commit conventions
<type>(<scope>): <description>
Types: feat | fix | chore | docs | style | refactor | test | ci
Scopes: ui | web | landing | api | config
```

## Phase 3: Design System (`@nexcart/ui`)

Configure `turbo.json` (at root):

### 3a: Components (7 Total)

Each in `packages/ui/src/components/<Name>/`:

**Components to build:**

1. **Button** — variant, size, disabled, loading
2. **Input** — label, placeholder, type, value, onChange, error, disabled, icon,validation(zod)
3. **ProductCard** — imageUrl, productName, price, currency, button, onViewDetails, rating + icon,category
4. **UserAdminCard** — icon, title, description(bold), icon + sub-description
5. **Tableau** — columns, data, onSort, pagination, onRowClick
6. **Sidebar** — items, logo,title
7. **AdvantageFrame** — icon, title, description

**Per component task:**
- [ ] Component JSX
- [ ] Unit tests (render, callbacks, states)
- [ ] Storybook stories
- [ ] Export from `src/index.ts`

### 3c: Storybook

### 3d: Testing

## Phase 4: Pages

> **Ensure `@nexcart/ui` is published/linked before starting pages.**
> **Each page = one feature branch:** `git flow feature start page-<name>`

### Client 1.a: Landing Page (`apps/landing`)
- Navbar, Hero, Advantages (AdvantageFrame), Featured Products (ProductCard), Footer

### Client 1.b: Footer (shared layout)
- Logo, nav columns, social links, newsletter signup

### Admin 2: Login (`apps/web`, `/login`)
- Email & password inputs, sign-in button, forgot password link

### Admin 3: Signup (`apps/web`, `/register`)
- Name, email, password, role selector, validation with `react-hook-form` + `zod`

### Page 4: Shop (`apps/web`, `/shop`)
- Product grid (ProductCard), search, filters, sorting, pagination

### Page 5: Admin Dashboard (`apps/web`, `/admin/dashboard`)
- Sidebar nav, Users/Products/Orders Tableaus, UserAdminCard list

### Page 6: Supplier Dashboard (`apps/web`, `/supplier/dashboard`)
- Sidebar nav, My Products Tableau, Orders Tableau

---

**Phase Completion Order:**
0 → 1 → 2 → 3a → 3b → 3c, 3d → 3e → 4 → 5

*Last updated: April 2, 2026*

**Tasks**

- 