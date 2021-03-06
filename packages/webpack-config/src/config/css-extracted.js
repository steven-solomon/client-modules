const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const loaders = require('../loaders');

const cssExtracted = options => {
  const defaultExtractOptions = {
    filename: '[name].css',
    esModule: true,
    ignoreOrder: true,
  };

  return {
    module: {
      rules: [loaders.css.extracted, loaders.scss.extracted],
    },

    plugins: [new MiniCssExtractPlugin(merge(defaultExtractOptions, options))],
  };
};

module.exports = cssExtracted;
