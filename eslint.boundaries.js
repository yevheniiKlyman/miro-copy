import boundaries from 'eslint-plugin-boundaries';

export const eslintBoundariesConfig = {
  plugins: {
    boundaries,
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },

    'boundaries/elements': [
      {
        type: 'app',
        pattern: './src/app',
      },
      {
        type: 'features',
        pattern: './src/features/*',
      },
      {
        type: 'shared',
        pattern: './src/shared',
      },
    ],
  },
  rules: {
    'boundaries/element-types': [
      2,
      {
        default: 'allow',
        rules: [
          {
            from: 'shared',
            disallow: ['app', 'features'],
            message:
              'The underlying layer module (${file.type}) cannot import a module from the overlying layer (${dependency.type}).',
          },
          {
            from: 'features',
            disallow: ['app'],
            message:
              'The underlying layer module (${file.type}) cannot import a module from the overlying layer (${dependency.type}).',
          },
        ],
      },
    ],
    'boundaries/entry-point': [
      2,
      {
        default: 'disallow',
        message:
          'The module (${file.type}) must be imported through the public API. Direct import from ${dependency.source} is prohibited.',

        rules: [
          {
            target: ['shared', 'app'],
            allow: '**',
          },
          {
            target: ['features'],
            allow: ['index.(ts|tsx)', '*.page.tsx'],
          },
        ],
      },
    ],
  },
};
