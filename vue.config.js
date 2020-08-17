const ThemeColorReplacer = require('webpack-theme-color-replacer')

module.exports = {
  configureWebpack: {
    plugins: [
      new ThemeColorReplacer({
        matchColors: ['#409EFF'], // colors array for extracting css file, support rgb and hsl.
        fileName: 'css/theme-colors-[contenthash:8].css', //optional. output css file name, suport [contenthash] and [hash].
        injectCss: true,
        isJsUgly: process.env.NODE_ENV !== 'development', // optional. Set to `true` if your js is uglified. Default is set by process.env.NODE_ENV.
      })
    ]
  }
}