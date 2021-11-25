const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


module.exports = {
    webpack(config, options) {
        // Do not run type checking twice:
        if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

        /* ---- Dev setup ---- */
        config.devServer = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-id, Content-Length, X-Requested-With',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
            },

            compress: true,
            historyApiFallback: true,
            hot: true,
            publicPath: config.output.publicPath,
            watchOptions: { poll: true }
        };

        return config;
    }
};
