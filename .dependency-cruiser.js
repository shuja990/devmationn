module.exports = {
    forbidden: [
      {
        name: 'not-in-use',
        severity: 'warn',
        comment: 'This module appears to be unused',
        from: {},
        to: {
          reachable: false
        }
      }
    ],
    options: {
      doNotFollow: {
        path: '^(node_modules|src/pages)'
      },
      exclude: {
        path: '^(node_modules|src/pages)'
      },
      combinedDependencies: true,
      preserveSymlinks: false
    }
  };
  