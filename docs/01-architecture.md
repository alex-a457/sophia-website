docs/01-architecture.md (or docs/01-architecture-and-conventions.md)

# Architecture & Technical Design (Doc 2)

## Purpose
This document defines the **frontend architecture**, **folder structure**, and **naming conventions** for the e-commerce storefront built with **Next.js App Router**.

Goals:
- Keep routes thin and clean
- Keep feature code grouped together (feature-based modules)
- Make API integration and transformations easy later
- Maintain consistent naming for team productivity

---

## Architecture Summary
- **Frontend:** Next.js (App Router) + TypeScript
- **UI Kit:** shadcn/ui + Tailwind
- **Forms:** React Hook Form + Zod (when forms exist)
- **Data Fetching (later):** TanStack Query (React Query)
- **API Layer (later):** Next.js Route Handlers (`app/api/*`) as **BFF**
- **Current Phase:** UI-only (mock data + typed contracts)

---

## Key Concepts

### 1) Storefront
**Storefront** = customer-facing e-commerce pages:
- Home, listing, product detail
- Cart, checkout
- Account / orders

### 2) BFF (Backend For Frontend)
When backend integration starts, the standard flow will be:

**Client UI → React Query Hook → Next.js API Route (BFF) → Backend API**

Why BFF:
- hide backend base URLs
- avoid CORS + browser token exposure
- normalize responses for UI
- centralize error handling and caching later

---

## Responsibilities by Layer

### `app/` — Routing Layer
**Purpose:** route composition only. Keep it thin.

Allowed in `app/`:
- `page.tsx`, `layout.tsx`
- `loading.tsx`, `error.tsx`, `not-found.tsx`
- route folders: `products/[slug]/page.tsx`
- API routes: `app/api/**/route.ts`

Rule:
- Route files should mostly import a feature view/section and render it.

Example:
```tsx
// src/app/(shop)/cart/page.tsx
import { CartPageView } from "@/features/cart";

export default function Page() {
  return <CartPageView />;
}

features/ — Feature Modules (Primary)

Purpose: own all business UI for a domain feature.

Each feature can include:

UI components

Page-level view/orchestrator (“View”)

Feature hooks (useCart, useProducts)

Feature types

Feature mocks (UI phase)

(later) feature API client + mappers

Rule:

If code belongs to one feature only → it stays inside that feature folder.

components/ — Shared UI Only

Purpose: reusable UI used by multiple features.

components/ui/(shadcn primitives)

components/layout/(Header/Footer/Nav)

Rule:

If a component is only used by one feature → it does not belong here.

lib/ — Shared Utilities & Base Clients

Purpose: app-wide helpers and foundations.

fetch wrapper

format helpers

constants

shared zod validators (optional)

Rule:

No feature-specific logic inside lib/.

hooks/ and types/ (Root)

Only for shared hooks/types used across multiple features.
Otherwise, keep them inside features/<feature>.

Recommended Folder Structure
src/
  app/
    (auth)/
      login/page.tsx
      signup/page.tsx
    (shop)/
      layout.tsx
      page.tsx
      products/
        page.tsx
        [slug]/page.tsx
      cart/
        page.tsx
      checkout/
        page.tsx
      account/
        page.tsx
        orders/page.tsx
    api/                         # BFF layer (later)
      auth/login/route.ts
      auth/signup/route.ts
      products/route.ts
      products/[id]/route.ts
      cart/route.ts
      cart/[itemId]/route.ts
      checkout/route.ts
      orders/route.ts
    layout.tsx
    globals.css

  features/
    auth/
      components/
      hooks/
      types.ts
      mocks.ts
      index.ts

    products/
      components/
      sections/
      hooks/
      types.ts
      mocks.ts
      index.ts

    cart/
      components/
      sections/
      hooks/
      store/                     # only if required
      types.ts
      mocks.ts
      index.ts

    checkout/
      components/
      sections/
      hooks/
      types.ts
      mocks.ts
      index.ts

    orders/
      components/
      sections/
      hooks/
      types.ts
      index.ts

  components/
    ui/
    layout/

  lib/
    api/
      client.ts
      config.ts
    utils.ts
    constants.ts

  hooks/                         # shared only
  types/                         # shared only
  config/
  mocks/                         # global mocks only (optional)

Naming Conventions (Very Important)
A) Folder Naming Rules (by level)
1) app/ route folders

✅ Use kebab-case for normal route folders:

product-reviews/

order-history/

✅ Use brackets for dynamic routes:

[slug]/

[id]/

✅ Use route groups in parentheses:

(auth)/

(shop)/

✅ Reserved file names inside routes (exact spellings):

page.tsx

layout.tsx

loading.tsx

error.tsx

not-found.tsx

2) features/ folders

✅ Feature folder name = domain name, kebab-case or simple plural:

products/

cart/

checkout/

orders/

auth/

Inside each feature, these subfolders are standard:

components/ (small UI components)

sections/ (page-level blocks / orchestrators)

hooks/ (feature hooks)

store/ (only if needed)

api/ (later)

types.ts, mocks.ts, index.ts

3) components/ shared folders

Use:

components/ui/ (shadcn primitives)

components/layout/ (Header/Footer/Nav)
Optionally:

components/icons/ (shared icons)

4) lib/ folders

Use only for shared utilities:

lib/api/

lib/utils.ts

lib/constants.ts

B) File Naming Rules (by type)
1) React Components

✅ Use PascalCase.tsx for React components.
Examples:

ProductCard.tsx

ProductGrid.tsx

CartItem.tsx

CartSummary.tsx

EmptyCart.tsx

CheckoutAddressForm.tsx

Header.tsx

Footer.tsx

Why: instantly recognizable as a component file.

2) Page-level Orchestrators (recommended naming)

Put these in features/<feature>/sections/ and use *View suffix:

ProductListView.tsx

ProductDetailView.tsx

CartPageView.tsx

CheckoutPageView.tsx

OrdersPageView.tsx

Avoid naming these as *Layout because Next.js has special layout.tsx.

3) Hooks

✅ Use camelCase and always start with use:

useCart.ts

useProducts.ts

useProductFilters.ts

useAuth.ts

4) Types

Feature-level types:

features/cart/types.ts

features/products/types.ts

Shared types:

src/types/common.ts

✅ Use PascalCase for Type names inside:

export type Product = {}

export type CartItem = {}

export type CheckoutFormValues = {}

5) Mocks

Feature mocks:

features/products/mocks.ts

features/cart/mocks.ts

Global mocks (only if shared):

src/mocks/products.ts

6) API client files (later)

Inside a feature:

features/products/api/productsApi.ts

features/cart/api/cartApi.ts

Naming:

xxxApi.ts for feature API client modules

7) Next.js API Routes (BFF) file names

Must be:

route.ts

Folder names:

app/api/products/route.ts

app/api/products/[id]/route.ts

8) Utility/helper files

✅ Use camelCase.ts or kebab-case.ts, but pick one.
Recommended camelCase:

formatCurrency.ts

buildQueryParams.ts

mapProductResponse.ts

9) Barrel exports

Use index.ts inside each feature:

features/cart/index.ts

features/products/index.ts

Example:

export * from "./sections/CartPageView";
export * from "./hooks/useCart";
export * from "./types";


Then imports are clean:

import { CartPageView } from "@/features/cart";

C) Boundary Rules (What goes where)
Feature folder contains:

UI pieces for that feature

View/orchestrator

Feature hooks and types

Feature mock data

Feature transformations/mappers (later)

Shared components/ contains:

UI used across multiple features (layout + shadcn primitives)

Not feature-specific UI

lib/ contains:

shared helpers: formatting, fetch wrapper, constants

NOT feature-specific logic

app/ contains:

route + layout composition only

keep files thin

API Integration Plan (Later)
Phase 1 — UI now

UI uses mock data (features /mocks.ts)

UI consumes internal types (features/types.ts)

Routes are thin wrappers around feature views

Phase 2 — API integration

Standard flow:

Component → React Query Hook → /api/ → Backend

Data transformation plan:

Backend raw response is mapped to internal feature types

UI should not depend on raw backend shape

Decision Notes

Feature-based modular structure is chosen for maintainability and low merge conflicts.

Clean layered architecture (domain/repo) can be introduced later when backend contracts are finalized, without changing UI structure.