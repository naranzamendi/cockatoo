const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./website/app.js"],
  output: {
    path: path.resolve(__dirname, "build/dist"),
    filename: "app.js"
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
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      } 
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./website/index.html",
      filename: "./index.html"
    })
  ],
  resolve: {
    modules: [
      path.resolve('./core'),
      path.resolve('./website'),
      path.resolve('./node_modules')
    ]
  }
};
