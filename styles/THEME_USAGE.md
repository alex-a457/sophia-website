# Theme System Usage Guide

## Overview

All colors are now centralized in `styles/theme.scss` using CSS variables. Colors are organized by usage frequency:

- **Primary**: Most frequently used colors (text, backgrounds, borders)
- **Secondary**: Less frequently used colors (accents, highlights)
- **Tertiary**: Rarely used colors (special cases, gradients)

## How to Use

### In Tailwind Classes

You can now use theme colors directly in Tailwind classes:

```tsx
// Primary colors (most used)
<div className="text-primary-text">Main text</div>
<div className="text-primary-text-muted">Muted text</div>
<div className="bg-primary-bg">Background</div>
<div className="border-primary-border">Border</div>

// Secondary colors (less used)
<div className="text-secondary-accent">Red accent</div>
<div className="bg-secondary-brand">Blue brand</div>
<div className="text-secondary-theme">Theme color</div>

// Tertiary colors (rarely used)
<div className="text-tertiary-secondary">Secondary brand</div>
```

### In CSS/SCSS Files

Use CSS variables directly:

```css
.my-component {
  color: var(--color-primary-text);
  background: var(--color-primary-bg);
  border: 1px solid var(--color-primary-border);
}
```

### In Inline Styles (React)

```tsx
<div style={{ color: 'var(--color-primary-text)' }}>
  Content
</div>
```

## Changing Themes

To switch themes, add a `data-theme` attribute to the `<html>` element:

```tsx
// In your root layout or _document.tsx
<html data-theme="light">  // Default theme
<html data-theme="dark">   // Dark theme
<html data-theme="custom"> // Custom theme
```

### Adding a New Theme

1. Open `styles/theme.scss`
2. Add a new `[data-theme="your-theme"]` block
3. Override the CSS variables you want to change:

```scss
[data-theme="your-theme"] {
  --color-primary-text: #YourColor;
  --color-primary-bg: #YourBgColor;
  // ... override other variables as needed
}
```

## Color Reference

### Primary Colors (Most Used)
- `--color-primary-text`: #151515 (Main text)
- `--color-primary-text-muted`: #AEAEAE (Muted text)
- `--color-primary-text-light`: #777 (Light text)
- `--color-primary-bg`: #FFFFFF (Main background)
- `--color-primary-bg-dark`: #000000 (Dark background)
- `--color-primary-border`: #E5E7EB (Main border)
- `--color-primary-border-light`: #E5E5E5 (Light border)
- `--color-primary-border-muted`: #AEAEAE (Muted border)
- `--color-primary-border-dark`: #151515 (Dark border)

### Secondary Colors (Less Used)
- `--color-secondary-accent`: #EA4335 (Red accent)
- `--color-secondary-brand`: #0F71CD (Blue brand)
- `--color-secondary-theme`: #F25C05 (Theme color)
- `--color-secondary-success`: #17c964 (Success)
- `--color-secondary-error`: #EA4335 (Error)
- `--color-secondary-warning`: #FFB457 (Warning)
- `--color-secondary-info`: #0F71CD (Info)

### Tertiary Colors (Rarely Used)
- `--color-tertiary-secondary`: #023F5C (Secondary brand)
- `--color-tertiary-inactive`: #989BA6 (Inactive)
- `--color-tertiary-active`: #000000 (Active)

## Migration Guide

### Before (Hardcoded)
```tsx
<div className="text-[#151515]">Text</div>
<div className="bg-[#EA4335]">Background</div>
```

### After (Theme Variables)
```tsx
<div className="text-primary-text">Text</div>
<div className="bg-secondary-accent">Background</div>
```

## Benefits

1. **Easy Theme Switching**: Change all colors by updating one file
2. **Consistency**: All colors come from a single source
3. **Maintainability**: Update colors in one place, affects entire app
4. **Type Safety**: Tailwind classes are autocompleted
5. **No Breaking Changes**: Existing hardcoded colors still work during migration

