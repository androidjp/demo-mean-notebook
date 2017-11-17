//-------------------------------------------
// 不会怎么改动的webpack config
//-------------------------------------------
module.exports = {
    entry:{
        main: './src/main.js'
    },
    resolve:{
        /// 查找文件时 自动补全的文件后缀
        extensions:['.js']
    },
    plugins:[]
}
