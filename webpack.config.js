const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js)$/,
                exclude: /node_modules/,
                
                use: [
                    { loader: 'babel-loader',
                        options: {
                            presets: ["env", "react"],
                        },
                    }
                ]
            },

            { test: /\.(css)$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader',
                        options: {
                            
                            importLoaders: 1
                        }
                    }, 
                    'postcss-loader',
                ] 
            },
            { test: /\.(scss)$/,
                
                use: [
                    'style-loader',
                    { loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 2,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        }
                    }, 
                    'postcss-loader',
                    "sass-loader"
                ] 
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'

            },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'

            },
            { test: /\.(jpg|jpeg|png|gif)$/,

                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'

                    }
                }

            }

        ]
    },
    resolve: {
        alias: {
            assets: path.resolve(__dirname, 'src/assets/'),
            lib: path.resolve(__dirname, 'src/lib/'),
            style: path.resolve(__dirname, 'src/components/style'),
            elements: path.resolve(__dirname, 'src/components/elements'),
        }
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    )
}


module.exports = config;