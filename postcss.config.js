import path from 'path';

const resolver = require('postcss-import-alias-resolver');

module.exports = {
  plugins: {
    'postcss-import': {
      resolve: resolver({
        alias: {
          '@': './src'
        },
        extensions: ['.css', '.vue'],

        dontPrefix: true,
        mergeAlias: 'replace',
        mergeModules: 'replace',
        mergeExtensions: 'replace',

        onFail(id, base) {
          if (/^@\//.test(id))
            return path.resolve(__dirname, './src', id.substr(2));
        }
      })
    },
    tailwindcss: {},
    autoprefixer: {}
  }
};
