# jbeat-ui

A minimal CSS-only UI system for blogs and long-form content.

## Features

- **CSS-only**: No JavaScript dependencies
- **Minimal**: Only ~1.6KB minified
- **Semantic**: Works directly with HTML elements
- **Customizable**: Built with CSS custom properties
- **Modern**: Uses modern CSS features with PostCSS processing
- **Documented**: Full Storybook documentation included

## Installation

```bash
npm install jbeat-ui
```

## Usage

### Via NPM/Bundler

```javascript
import 'jbeat-ui/dist/jbeat-ui.css';
```

### Via HTML

```html
<link rel="stylesheet" href="path/to/jbeat-ui.css">
```

### Via CDN (after publishing)

```html
<link rel="stylesheet" href="https://unpkg.com/jbeat-ui@latest/dist/jbeat-ui.css">
```

## What's Included

jbeat-ui provides sensible default styles for common HTML elements:

- **Reset**: Modern CSS reset for consistent cross-browser rendering
- **Typography**: Headings (h1-h3), paragraphs, and links
- **Lists**: Styled ordered and unordered lists with nested support
- **Structure**: Article and header layout components
- **Variables**: Customizable CSS custom properties in `:root`

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Blog</title>
  <link rel="stylesheet" href="path/to/jbeat-ui.css">
</head>
<body>
  <article>
    <header>
      <h1>My Blog Post Title</h1>
      <p>Published on December 23, 2025</p>
    </header>

    <h2>Introduction</h2>
    <p>This is a paragraph with some <a href="#">links</a> in it.</p>

    <h3>Key Points</h3>
    <ul>
      <li>First point</li>
      <li>Second point</li>
      <li>Third point</li>
    </ul>
  </article>
</body>
</html>
```

## Customization

jbeat-ui uses CSS custom properties which you can override:

```css
:root {
  /* Typography */
  --font-family-base: system-ui, -apple-system, sans-serif;
  --font-size-base: 1rem;
  --font-size-h1: 2.5rem;
  --font-size-h2: 2rem;
  --font-size-h3: 1.5rem;
  --line-height-base: 1.6;
  --line-height-heading: 1.2;

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;

  /* Colors */
  --color-text: #1a1a1a;
  --color-text-muted: #666;
  --color-link: #0066cc;
  --color-link-hover: #0052a3;
  --color-bg: #ffffff;
}
```

Simply override these variables in your own CSS to customize the design.

## Documentation

View the full Storybook documentation by running:

```bash
npm run storybook
```

Then visit http://localhost:6006

## Development

### Prerequisites

- Node.js >= 18
- npm >= 9

### Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/jbeat-ui.git
cd jbeat-ui

# Install dependencies
npm install

# Run development server
npm run dev

# Or run Storybook for component development
npm run storybook
```

### Available Scripts

- `npm run dev` - Start Parcel dev server
- `npm run build` - Build for production
- `npm run build:dev` - Build with source maps
- `npm run clean` - Clean build artifacts
- `npm run storybook` - Start Storybook dev server
- `npm run build-storybook` - Build Storybook for deployment

## Tech Stack

- **Parcel** - Zero-config bundler
- **PostCSS** - CSS processing with modern features
  - `postcss-import` - Inline @import statements
  - `postcss-preset-env` - Modern CSS features
  - `cssnano` - Minification
- **Storybook** - Component documentation

## Browser Support

jbeat-ui supports all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
