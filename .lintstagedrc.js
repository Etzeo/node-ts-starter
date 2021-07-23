module.exports = {
  '**/*.ts': 'eslint --fix',
  '**/*.{css,md,json}': 'prettier --write',
  '**/*.ts': () => 'tsc -p tsconfig.json --noEmit',
};
