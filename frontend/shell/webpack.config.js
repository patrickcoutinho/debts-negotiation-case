// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin;

const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index',
  entry: {
    app: {
      import: './src/index',
    },
  },
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: 'auto',
  },

  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      filename: 'remoteEntry.js',
      remotes: {
        offer: 'offer@http://localhost:8080/remoteEntry.js',
        design_system: 'design_system@http://localhost:8081/remoteEntry.js',
      },
      exposes: {
        './store': './src/store/index',
      },
      shared: {
        react: {
          requiredVersion: deps.react,
        },
        'react-dom': {
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.svg',
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
};
