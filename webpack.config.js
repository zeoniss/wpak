const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()]
};