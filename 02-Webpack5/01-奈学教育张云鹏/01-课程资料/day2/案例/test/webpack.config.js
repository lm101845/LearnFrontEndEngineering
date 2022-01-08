const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
	entry:{
		index:'./src/index.js'
	},
	devServer:{
		hot:true,
		host:'localhost',
		port:8080,
		open:true
	},
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'[name].bundle.js',
		publicPath:''
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./public/index.html',
			filename:'index.html',
		})
	]
}