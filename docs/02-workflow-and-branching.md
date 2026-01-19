
---

## 📄 `docs/02-workflow-and-branching.md`

```md
# Git Workflow & Branching Strategy

## Development Model
- **Trunk-based development**
- Short-lived feature branches
- `main` is always deployable

## Branch Naming Convention

### Features
feat/home-ui  
feat/category-list-ui  
feat/product-detail-ui  
feat/cart-drawer-ui  
feat/checkout-address-ui  
feat/checkout-payment-ui  
feat/header-footer-ui  
feat/mobile-nav-ui  

### Bug Fixes
fix/header-zindex  
fix/mobile-padding  
fix/product-card-spacing  

### Refactors (no behavior change)
refactor/product-components  
refactor/checkout-sections  

### Chores / Tooling
chore/add-prettier  
chore/add-husky  
chore/update-eslint  

### Documentation
docs/branching-workflow  
docs/ui-guidelines  

## Rebase vs Merge (Team Rule)

### Required
- Each developer rebases their **own feature branch** onto latest `main`
- Rebase daily or before opening a PR

### Forbidden
- Rebasing `main`
- Rebasing shared branches
- Merging `main` repeatedly into feature branches

### Safe Commands
```bash
git checkout main
git pull origin main

git checkout feat/product-detail-ui
git rebase main
git push --force-with-lease
