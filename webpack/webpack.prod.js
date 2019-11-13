const webpack = require("webpack")
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const config = require("../config/config.prod.js")

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            "featureFlag": JSON.stringify(config.featureFlag),
        })
    ],
});
