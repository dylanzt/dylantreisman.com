const webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const common = require("./webpack.common.js");
const config = require("../config/config.prod.js");

module.exports = merge(common, {
    mode: "production",
    optimization: {
        minimizer: [
            new TerserJSPlugin({
                sourceMap: true,
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    map: {
                        inline: false,
                        annotation: true,
                    },
                },
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
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
