const { resolve } = require('path');

module.exports = {
    css: { extract: false },
    transpileDependencies: ['./src/warnings.js'],
    configureWebpack: {
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
