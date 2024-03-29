// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      name: 'design_system',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/button/button',
        './ButtonProps': './src/components/button/button',
        './ChakraProvider': './src/components/chakra-provider/chakra-provider',
        './Footer': './src/components/footer/footer',
        './Logo': './src/components/logo/logo',
        './Modal': './src/components/modal/modal',
        './Navbar': './src/components/navbar/navbar',
        './Page': './src/components/page/page',
      },
      remotes: {
        offer: 'offer@http://localhost:8080/remoteEntry.js',
      },
      shared: {
        ...deps,
        react: {
          requiredVersion: deps.react,
        },
        'react-dom': {
          requiredVersion: deps['react-dom'],
        },
        '@chakra-ui/react': {
          requiredVersion: deps['@chakra-ui/react'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
