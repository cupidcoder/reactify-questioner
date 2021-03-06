const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const clearBuildPlugin = new CleanWebpackPlugin({
  dry: true,
  verbose: true
});

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, 'public', 'index.html'),
  filename: './index.html'
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js)|(jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', {
              plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime']
            }]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              camelCase: true,
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|woff|woff2|eot|ttf|svg)$/i,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [htmlPlugin,
    clearBuildPlugin,
    new Dotenv({
      systemvars: true
    })
  ],
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: process.env.ASSET_PATH || '/',
  },
  devServer: {
    contentBase: './build',
    hot: true,
    publicPath: process.env.ASSET_PATH || '/',
    historyApiFallback: true
  }
};
