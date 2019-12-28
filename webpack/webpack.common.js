const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

const src = path.resolve(__dirname, "../src/");

module.exports = {
    context: src,
    entry: "./index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./template.html",
            filename: "index.html",
        }),
    ],
    resolve: {
        extensions: [".jsx", ".js", ".scss", ".css", ".json"],
        alias: {
            src,
            Components: path.resolve(src, "./components/"),
            Layouts: path.resolve(src, "./layouts/"),
            Styling: path.resolve(src, "./styling/"),
            Views: path.resolve(src, "./views/"),
        },
    },
};
