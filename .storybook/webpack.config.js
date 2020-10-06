const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.css$/,
    loaders: [
      // Loader for webpack to process CSS with PostCSS
      {
        loader: 'postcss-loader',
        options: {
          /* 
            Enable Source Maps
           */
          sourceMap: true,
          /*
            Set postcss.config.js config path && ctx 
           */
          config: {
            path: path.resolve(__dirname, '../'),
          },
        },
      },
    ],

    include: path.resolve(__dirname, '../'),
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')],
    },
  });

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};