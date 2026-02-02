import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'dist/**',
    'node_modules/**',
    '**/*.config.js',
    '**/*.config.ts',
  ]),

  {
    rules: {
      // Console warnings (allow only warn/error for production)
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // TypeScript unused vars (ignore vars starting with _)
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // Warn on 'any' instead of error (more flexible for big projects)
      '@typescript-eslint/no-explicit-any': 'error',

      // React rules (Next.js already handles these, but explicit is good)
      'react/react-in-jsx-scope': 'off', // Next.js auto-imports React
      'react/prop-types': 'off', // Using TypeScript instead

      // Next.js-specific: allow default exports for pages/layouts
      'import/no-default-export': 'off',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/interactive-supports-focus': 'warn',
    },
  },
]);

export default eslintConfig;
