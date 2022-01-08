const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:{
    index:'./src/index.js'
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].bundle.js',
    //publicPath的作用是配置全局的公共访问路径
    //当项目的依赖包放置在与网页不同的服务器上时
    //或者使用绝对路径引用的时候需要配置publicPath
    publicPath:''//生成的html中引入的依赖前面的部分
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:[{loader:'babel-loader'}]
      },
      {
        test:/\.(jpg|jpeg|gif|png)$/,
        use:[{loader:'file-loader'}]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      filename:'index.html',
      chunks:['index']
    })
  ],
  resolve:{
    //配置免后缀的文件类型
    extensions:['.js','.jsx','.vue','.css','.less','.scss'],
    //为全路径配置缩写@
		alias:{
			'@':path.resolve(__dirname,'src')
		}
  }
}