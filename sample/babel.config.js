module.exports = {
    // plugins: [
    //     "@babel/plugin-transform-block-scoping",
    //     "@babel/plugin-transform-arrow-functions",
    //     "@babel/plugin-transform-strict-mode",
    // ],
    presets: [
        //
        // "./my-babel-preset.js"
        [
            "@babel/preset-env",
            {
                targets: {
                    chrome: "79",
                    ie: "11",
                },
                useBuiltIns: "usage", // 'entry', false 이런것도 있음
                corejs: {
                    version: 2, // 최신버전 3이라고 함
                },
            },
        ],
    ],
};
