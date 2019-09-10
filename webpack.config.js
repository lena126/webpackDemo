const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); //通过 npm 安装

module.exports = {
    entry: './src/index.js',//文件入口
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new CleanWebpackPlugin()//打包之前，使用该插件删除dist目录下的所有内容
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),//将绝对路径转为相对路径
        filename: 'index.bundle.js'//输出文件
    }
};
