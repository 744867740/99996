'use strict';
const path = require("path");
const { webpack } = require("webpack");
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports = {
    entry: './src/index.js',//入口文件
    output: {
        path: path.resolve(__dirname,'dist'),//输出到哪个文件夹
        filename: 'output.js'//输出的文件名
    },
    mode: 'development',//打包模式
    devServer: {
        // contentBase: resolve(__dirname,'dist'),//项目编译后的路径，在计算机内存中，看不到
        static: path.resolve(__dirname,"dist"),
        port: 800,//端口号
        open: true,//自动打开浏览器
    },
    plugins: [//热更新
        new webpack.HotModuleReplacementPlugin()
    ]
}