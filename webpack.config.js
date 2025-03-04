const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: './src/index.js',
    devtool: "inline-source-map",
    devServer: {
      static: "./dist",
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: "body",
    })
],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: "single",
    },
};