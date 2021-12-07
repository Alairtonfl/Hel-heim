module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [
      ["@babel/plugin-proposal-decorators", {
        "legacy": true
      }],
      ['module-resolver', {
        alias: {
          '@controllers': './src/Controllers',
          '@Entities': './src/Entities',
          '@Repository': './src/Repository',
          '@Services': './src/Services',
          '@Bases': './src/Bases'
        }
      }]
    ],
    ignore: [
      '**/*.spec.ts'
    ]
  }