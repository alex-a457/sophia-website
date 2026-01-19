
---

## 📄 `docs/03-code-quality.md`

```md
# Code Quality & Standards

## General Rules
- TypeScript mandatory
- No unused imports or variables
- No console.logs in committed code
- Components must be reusable

## Definition of Done (UI)
A UI feature is complete only if:
- Matches Figma design
- Responsive on all breakpoints
- Uses mock data & shared types
- Clean commit history
- Approved via PR

## Tooling
- ESLint (enabled)
- Prettier (to be added)
- Husky + lint-staged (to be added)

## VS Code
- Shared `.vscode/settings.json` recommended
- Enforce:
  - format on save
  - Prettier as default formatter
  - ESLint fixes on save

## Pull Request Checklist
- [ ] UI matches Figma
- [ ] Responsive verified
- [ ] No unused code
- [ ] Screenshots attached
- [ ] Clean commit messages
