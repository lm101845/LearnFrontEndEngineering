const { merge } = require('webpack-merge')
const path = require('path')
const base = require('./webpack.base.js')
module.exports = merge(base,{
  mode:'development',
  devtool:'inline-source-map',
  devServer:{
    static:[
      path.resolve(__dirname,'dist'),
      path.resolve(__dirname,'public'),
    ],
    host:'localhost',
    port:8080,
    open:true
  },
  module:{
		rules:[
			{ //用来编译css代码
				test:/\.css$/,
				use:[
					{loader:'style-loader'},
					{loader:'css-loader'},
					{loader:'postcss-loader'},
				]
			},
			{ //用来编译sass代码
				test:/\.scss$/,
				use:[
					{loader:'style-loader'},
					{loader:'css-loader'},
					{loader:'postcss-loader'},
					{loader:'sass-loader'}
				]
			}
		]
	}
})