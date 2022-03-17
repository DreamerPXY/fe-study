const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    //编译模式
    mode:'development',
    entry:path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },devServer:{
        static:'./src'
    },
    plugins:[
      new VueLoaderPlugin()  
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.vue$/,loader:'vue-loader'}
        ]
    }
    
}
