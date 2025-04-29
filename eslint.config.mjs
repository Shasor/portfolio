import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import tailwind from 'eslint-plugin-tailwindcss';
import js from '@eslint/js';
import ts from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [js.configs.recommended, ...ts.configs.recommended, ...compat.extends('next/core-web-vitals', 'next/typescript'), ...tailwind.configs['flat/recommended']];

export default eslintConfig;
