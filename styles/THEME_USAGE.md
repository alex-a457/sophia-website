# Theme System Usage Guide

## Overview

All colors are centralized in `styles/theme.scss` using simple CSS variables.

## How to Use

### In Tailwind Classes

```tsx
// Text
<div className="text-theme">Main text</div>
<div className="text-text-muted">Muted text</div>
<div className="text-text-light">Light text</div>

// Background
<div className="bg-bg">Background</div>
<div className="bg-bg-dark">Dark background</div>

// Border
<div className="border-border">Border</div>
<div className="border-border-muted">Muted border</div>

// Accents
<div className="text-accent">Red accent</div>
<div className="bg-brand">Blue brand</div>
<div className="text-theme">Theme color</div>

// Status
<div className="text-success">Success</div>
<div className="text-error">Error</div>
```

### In CSS/SCSS Files

```css
.my-component {
  color: var(--text);
  background: var(--bg);
  border: 1px solid var(--border);
}
```

### In Inline Styles

```tsx
<div style={{ color: 'var(--text)' }}>Content</div>
```

## Changing Themes

Add `data-theme` to `<html>`:

```tsx
<html data-theme="light">  // Default
<html data-theme="dark">   // Dark theme
<html data-theme="custom">  // Custom theme
```

### Adding a New Theme

Open `styles/theme.scss` and add:

```scss
[data-theme="your-theme"] {
  --text: #YourColor;
  --bg: #YourBgColor;
}
```

## Color Variables

- `--text`: #151515 (Main text)
- `--text-muted`: #AEAEAE (Muted text)
- `--text-light`: #777 (Light text)
- `--bg`: #FFFFFF (Background)
- `--bg-dark`: #000000 (Dark background)
- `--border`: #E5E7EB (Border)
- `--border-muted`: #AEAEAE (Muted border)
- `--accent`: #EA4335 (Red accent)
- `--brand`: #0F71CD (Blue brand)
- `--theme`: #F25C05 (Theme color)
- `--success`: #17c964
- `--error`: #EA4335
- `--warning`: #FFB457
- `--info`: #0F71CD

## Example

### Before
```tsx
<div className="text-[#151515] bg-[#FFFFFF]">Content</div>
```

### After
```tsx
<div className="text-theme bg-bg">Content</div>
```

