const webpack = require("webpack");
const merge = require("webpack-merge");


const common = require("./webpack.common.js");
const config = require("../config/config.dev.js");

module.exports = merge(common, {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            modules: {
                                mode: "local",
                                localIdentName: "[path][local]",
                                context: "src",
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
    devtool: "inline-source-map",
    plugins: [
        new webpack.DefinePlugin({
            "featureFlag": JSON.stringify(config.featureFlag),
        }),
    ],
});
