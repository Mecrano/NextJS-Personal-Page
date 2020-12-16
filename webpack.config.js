// Imports: Dependencies
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Webpack Configuration
const config = {
    entry: path.resolve(__dirname, 'src/App.jsx'),
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'app.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                            plugins: [
                                [
                                    '@babel/plugin-transform-runtime',
                                    { corejs: 3 },
                                ],
                            ],
                        },
                    },
                    {
                        loader: 'eslint-loader',
                    },
                ],
            },
            {
                exclude: /node_modules/,
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: { url: false, sourceMap: false },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|mp4)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[contenthash].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new CleanWebpackPlugin()],
    watch: true,
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
    },
};

module.exports = config;
