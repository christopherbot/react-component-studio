const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [`${__dirname}/src`, 'node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },

      {
        test: /\.(css|scss)$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        }, {
          loader: 'sass-loader',
        }],
      },
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      title: 'React Component Studio Playground',
      template: `${__dirname}/src/index.ejs`,
      filename: `${__dirname}/dist/index.html`,
    })
  ]
}