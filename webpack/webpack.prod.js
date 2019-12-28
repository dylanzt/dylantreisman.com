const webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const common = require("./webpack.common.js");
const config = require("../config/config.prod.js");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(css|scss)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            modules: {
                                mode: "local",
                                localIdentName: "[hash:base64]",
                                hashPrefix: "dylantreisman.com",
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    devtool: "source-map",
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            "featureFlag": JSON.stringify(config.featureFlag),
        }),
        new MiniCssExtractPlugin(),
    ],
});
