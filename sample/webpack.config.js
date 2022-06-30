const path = require("path");
const MyWebpackMyPlugin = require("./my-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/app.js",
        // main2: './src/app2.js', // 이렇게 2개 일수도 있음
    },
    output: {
        path: path.resolve("./dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/, // 정규표현식 모든 .js로 끝나는 파일
            //     use: [path.resolve("./my-webpack-loader.js")],
            // },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            // {
            //     test: /\.(png|jpg|gif|svg)$/,
            //     loader: "file-loader",
            //     options: {
            //         publicPath: "./dist/",
            //         name: "[name].[ext]?[hash]",
            //     },
            //     // use: ["file-loader"],
            // },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "url-loader",
                options: {
                    publicPath: "./dist/",
                    name: "[name].[ext]?[hash]",
                    limit: 20000, // 20kb
                },
            },
        ],
    },
    plugins: [new MyWebpackMyPlugin()],
};
