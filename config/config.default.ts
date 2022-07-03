export default {
  server: {
    port: 3000,
  },
  build: {
    packageManager: 'yarn',
    // *.md *.lock and tsconfig.json exclude by default
    exclude: ['.gitignore', '.prettierrc'],
  },
};
