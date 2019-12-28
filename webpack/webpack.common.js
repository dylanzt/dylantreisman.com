const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src",
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
            template: "./src/index.html",
            filename: "./index.html",
        }),
    ],
    resolve: {
        extensions: [".jsx", ".js", ".scss", ".css", ".json"],
    },
};
