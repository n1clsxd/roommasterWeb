const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: './app.js', //npm run production
    publicPath: '/'
  },
  devServer: {
    port: 8087,
    contentBase: './public',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: __dirname + '/node_modules'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.css' //href
    })
  ],
  module: {
    rules: [
      { //babel
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      },
      { //css
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          //'style-loader', 
          'css-loader'
        ]
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
        loader: 'file-loader'
      }

    ]
  }
}