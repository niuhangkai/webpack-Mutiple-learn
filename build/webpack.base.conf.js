/*
 * @Author: niuhangkai 
 * @Date: 2019-08-25 16:45:24 
 * @Last Modified by: niuhangkai
 * @Last Modified time: 2019-08-25 22:13:29
 */

const path = require('path');
const webpack = require('webpack')
const { getEntry,htmlPlugins } = require('./utils')

const base  = {
  entry:getEntry(),
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "postcss-loader","less-loader"] 
      }
    ]
  },
  optimization: {
    splitChunks: {
        cacheGroups: {
            vendor: { // 抽离第三方插件
                test: /node_modules/, // 指定是node_modules下的第三方包
                chunks: 'initial',
                name: 'vendor', // 打包后的文件名，任意命名    
                // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                priority: 10
            },
            utils: { // 抽离自己写的公共代码，common这个名字可以随意起
                chunks: 'initial',
                name: 'common', // 任意命名
                minSize: 0, // 只要超出0字节就生成一个新包
                minChunks: 2
            }
        }
    }
},
  plugins: [
    ...htmlPlugins()
    // new webpack.optimize.splitChunks({
    //   name: "common",
    // }),
    // new webpack.optimize.splitChunks({
    //     name: "manifest"
    // }),
  ]
}
module.exports = base