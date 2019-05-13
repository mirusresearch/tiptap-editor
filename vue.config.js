const { resolve } = require('path');

module.exports = {
    css: { extract: false },
    transpileDependencies: ['tiptap'],
    configureWebpack: {
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: [resolve('src')],
                    loader: 'babel-loader',
                },
            ],
        },
    },
};
