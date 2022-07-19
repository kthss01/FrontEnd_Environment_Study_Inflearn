const path = require("path");
// const MyWebpackMyPlugin = require("./my-webpack-plugin");
const webpack = require("webpack");
const childProcess = require("child_process");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: "./app.js", // root에 있는 js 테스트
        // main: "./src/app.js",
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
                use: [
                    process.env.NODE_ENV === "production"
                        ? MiniCssExtractPlugin.loader
                        : "style-loader",
                    "css-loader",
                ],
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
                    // publicPath: "./dist/",
                    name: "[name].[ext]?[hash]",
                    limit: 20000, // 20kb
                },
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/",
            },
        ],
    },
    plugins: [
        // 환경 변수 등록/관리 설정
        // new webpack.EnvironmentPlugin({
        //     NODE_ENV: "development",
        // }),
        //new MyWebpackMyPlugin()
        new webpack.BannerPlugin({
            // banner: "이것은 배너입니다.",
            banner: `
                Build Date: ${new Date().toLocaleString()}
                Commit Version: ${childProcess.execSync(
                    "git rev-parse --short HEAD"
                )}
                Author: ${childProcess.execSync("git config user.name")}
            `,
        }),
        new webpack.DefinePlugin({
            // TWO: "1+1", // 2라는 값이 출력됨
            TWO: JSON.stringify("1+1"), // 1+1 문자열 출력됨
            "api.domain": JSON.stringify("http:/`/dev.api.domain.com"),
            //"process.env.NODE_ENV": JSON.stringify("development"),
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            templateParameters: {
                env: process.env.NODE_ENV === "development" ? "(개발용)" : "",
            },
            minify:
                process.env.NODE_ENV === "production"
                    ? {
                          collapseWhitespace: true, // 빈칸제거
                          removeComments: true, // 주석제거
                      }
                    : false,
        }),
        new CleanWebpackPlugin({}),
        ...(process.env.NODE_ENV === "production"
            ? [new MiniCssExtractPlugin({ filename: "[name].css" })]
            : []),
    ],
};
