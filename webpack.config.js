const path = require('path');

module.exports = {
    entry: './src/index.js',//文件入口
    output: {
        path: path.resolve(__dirname, 'dist'),//将绝对路径转为相对路径
        filename: 'index.bundle.js'//输出文件
    }
};
