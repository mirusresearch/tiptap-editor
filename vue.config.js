// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    css: { extract: false },
    configureWebpack: () => ({
        // mode: 'production',
        // plugins: [new BundleAnalyzerPlugin({ analyzerMode: 'static' })],
    }),
    chainWebpack: config => {
        config.module.rule('vue').use('vue-loader');
    },
};
