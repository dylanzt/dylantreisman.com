const webpack = require("webpack")
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const config = require("../config/config.dev.js")

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            "featureFlag": JSON.stringify(config.featureFlag),
        })
    ],
});
