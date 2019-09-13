const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); //通过 npm 安装
const webpack=require('webpack');

module.exports = {
    // entry: './src/index.js',//文件入口
    mode:'development',
    devtool:'cheap-module-eval-source-map', // 开发环境
    // devtool:'cheap-module-source-map', // 线上环境
    entry: {
        main:'./src/index.js',
    },//文件入口
    devServer: {
        historyApiFallback: true,
        host: '127.0.0.1',
        hot:true,
        hotOnly:true,
        inline: true,//注意：不写hot: true，否则浏览器无法自动更新；也不要写colors:true，progress:true等，webpack2.x已不支持这些
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new CleanWebpackPlugin(),//打包之前，使用该插件删除dist目录下的所有内容,
        new webpack.HotModuleReplacementPlugin(),// HMR开启
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),//将绝对路径转为相对路径
        filename: '[name].js'//输出文件
    },
};
