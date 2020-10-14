const path = require("path");
module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["css-loader"]
        }]
    }
};