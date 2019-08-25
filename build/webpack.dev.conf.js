/*
 * @Author: niuhangkai
 * @Date: 2019-08-24 16:26:56
 * @Last Modified by: niuhangkai
 * @Last Modified time: 2019-08-25 22:13:22
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')



module.exports =merge(baseConfig,{
  // mode: 'production',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    // filename: "[name].[chunkhash:8].js"
    filename: "[name].[hash:8].js"
  },
  devServer: {
    openPage:'index.html',
    watchContentBase: true,
		contentBase: path.join(__dirname, "../src/pages/index"),
		publicPath:'/',
		host: "127.0.0.1",
		port: "8080",
		overlay: true, // 浏览器页面上显示错误
		// open: true, // 开启浏览器
		// stats: "errors-only", //stats: "errors-only"表示只打印错误：
		//服务器代理配置项
    proxy: {
        '/testing/*': {
            target: 'https://www.baidu.com',
            secure: true,
            changeOrigin: true
        }
    }
    },
})
  
 