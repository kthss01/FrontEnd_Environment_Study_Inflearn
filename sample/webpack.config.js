const path = require("path");

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
};
