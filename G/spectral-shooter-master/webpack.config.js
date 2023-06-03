const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackInlineSourcePlugin = require('@effortlessmotion/html-webpack-inline-source-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const isProduction = process.env.npm_lifecycle_event === 'build'

module.exports = {
    entry: './src',
    devtool: !isProduction && 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                type: 'asset/inline',
            },
            // {
            //     test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            //     use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
            // },
            {
                test: isProduction ? /\.js$/ : /^\s+$/,
                enforce: 'pre',
                exclude: /(node_modules|bower_components|\.spec\.js)/,
                use: [
                    {
                        loader: 'webpack-strip-block',
                        options: {
                            start: '#IfDev',
                            end: '#EndIfDev'
                            /* #IfDev */
                            /* #EndIfDev */
                        }
                    },
                ]
            }
        ]
    },
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
    //         // `...`,
    //     ],
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: isProduction && {
                collapseWhitespace: true
            },
            inlineSource: isProduction && '\.(js|css)$'
        }),
        new HtmlWebpackInlineSourcePlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CssMinimizerPlugin(),
    ],
    stats: 'minimal',
    devServer: {
        client: {
            overlay: true
        }
    }
}
