const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

const src = path.resolve(__dirname, "../src/");

module.exports = {
    context: src,
    entry: "./index.js",
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                use: [
                    "file-loader",
                ],
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
        extensions: [".jsx", ".js", ".scss"],
        alias: {
            src,
            Assets: path.resolve(src, "./assets/"),
            Components: path.resolve(src, "./components/"),
            Layouts: path.resolve(src, "./layouts/"),
            Styling: path.resolve(src, "./styling/"),
            Views: path.resolve(src, "./views/"),
        },
    },
};
