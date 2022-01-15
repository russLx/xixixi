const pxtorem = require('postcss-pxtorem')

module.exports = {
  outputDir: 'dist', // 打包构建时的输出目录
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/', // 部署应用包时的基本 URL
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          pxtorem({
            rootValue: 75, // 通常根据设计稿来设置
            propList: ['*', '!font*'], // 哪些属性自动从 px 转换为 rem, !font 排除所有与字体相关的属性
            selectorBlackList: ['van'], // 不转换 vant 组件库中的各样式
          }),
        ],
      },
    },
  },
}
