import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    rules: {
      // Disable i18n warning — this is a single-language (English) website
      // and does not require internationalization support.
      'i18next/no-literal-string': 'off',

      // Disable bracket-notation security warning — the keys used here are
      // always internal numeric product IDs from a static array, not user input.
      'security/detect-object-injection': 'off',
    },
    ignores: ['dist/**', 'node_modules/**'],
  },
];
