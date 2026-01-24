// eslint.config.mjs
export default {
  // Excluding certain files from linting
  ignores: [
    ".now/*",
    "**/*.css",
    "**/.changeset",
    "**/dist",
    "esm/*",
    "public/*",
    "tests/*",
    "scripts/*",
    "**/*.config.js",
    "**/.DS_Store",
    "**/node_modules",
    "**/coverage",
    "**/.next",
    "**/build",
    "!**/.commitlintrc.cjs",
    "!**/.lintstagedrc.cjs",
    "!**/jest.config.js",
    "!**/plopfile.js",
    "!**/react-shim.js",
    "!**/tsup.config.ts"
  ],

  // Set global environments to recognize Node.js and Browser globals
  env: {
    browser: true,  // Makes sure browser globals (e.g., `window`, `document`) are available
    node: true,     // Makes sure Node.js globals (e.g., `module`, `require`) are available
    es2021: true    // Enables modern JavaScript features
  },

  // Extending recommended configurations
  extends: [
    "eslint:recommended",       // ESLint's recommended rules
    "plugin:react/recommended", // React best practices
    "plugin:prettier/recommended", // Prettier integration for code formatting
    "plugin:react-hooks/recommended", // React hooks linting rules
    "plugin:jsx-a11y/recommended", // Accessibility linting for JSX
    "plugin:@next/next/recommended" // Next.js specific linting
  ],

  plugins: [
    "react",                  // React-specific linting
    "unused-imports",         // Lint unused imports
    "import",                 // Lint import/export statements
    "@typescript-eslint",     // TypeScript-specific linting
    "jsx-a11y",               // Accessibility linting for JSX
    "prettier"                // Prettier integration
  ],

  // Parser options for ECMAScript and JSX
  parserOptions: {
    ecmaVersion: 12, // Allows for modern ECMAScript syntax
    sourceType: "module", // Allows for ES module imports (e.g., `import`/`export`)
    ecmaFeatures: {
      jsx: true, // Enable JSX syntax support
    },
  },

  // Settings for React version detection
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },

  // Rules section: Customize linting rules as needed
  rules: {
    "no-console": "warn", // Warn about console statements
    "react/prop-types": "off", // Disable prop-types check (TypeScript handles types)
    "react/jsx-uses-react": "off", // No longer necessary with React 17+
    "react/react-in-jsx-scope": "off", // No longer needed with React 17+
    "react-hooks/exhaustive-deps": "warn", // Warn on missing dependencies in useEffect/useCallback
    "jsx-a11y/click-events-have-key-events": "warn", // Accessibility: Add key events for clickable elements
    "jsx-a11y/interactive-supports-focus": "warn", // Accessibility: Ensure interactive elements are focusable
    "import/no-default-export": "off", // Allow default exports
    "prettier/prettier": "error", // Enforce Prettier formatting
    "unused-imports/no-unused-vars": "warn", // Warn about unused variables
    "unused-imports/no-unused-imports": "warn", // Warn about unused imports
    "@typescript-eslint/no-explicit-any": "error", // Disallow the use of `any` type
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],  // First, built-in and external packages
          ["react", "next"],         // React and Next.js imports
          ["internal", "sibling", "parent", "index"], // Internal imports
          ["types"], // Type imports (typically at the bottom)
        ],
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "^types$",
            group: "internal",
            position: "before",
          },
          {
            pattern: "^@/config/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "^@/lib/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "^@/components/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "^@/app/**",
            group: "internal",
            position: "before",
          },
        ],
        "newlines-between": "always", // Ensure newlines between different groups
      },
    ],
    "react/self-closing-comp": "warn", // Warn about missing self-closing tags in JSX
    "react/jsx-sort-props": "off", // Allow JSX props order to be freeform
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_", // Ignore variables starting with an underscore
        varsIgnorePattern: "^_", // Ignore variables starting with an underscore
        caughtErrorsIgnorePattern: "^_", // Ignore caught errors starting with an underscore
      },
    ],
    "padding-line-between-statements": [
      "warn",
      {
        blankLine: "always",
        prev: "*",
        next: "return", // Add a blank line before `return`
      },
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*", // Add a blank line after variable declarations
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"], // Allow variables to be grouped together
      },
    ],
  },
};
