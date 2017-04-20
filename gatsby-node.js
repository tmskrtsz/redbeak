exports.modifyWebpackConfig = function(config, stage) {
  config.loader('stylus', function(cfg) {
    config.removeLoader('css')
    cfg.test = /\.styl$/
    cfg.loader = 'style-loader!css-loader!stylus-loader'
    return cfg
  })
  return config
}