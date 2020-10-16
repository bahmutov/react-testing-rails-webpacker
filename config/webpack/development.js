process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

// console.log('NODE_ENV', process.env.NODE_ENV)

const config = environment.toWebpackConfig()
// for some reason config.mode was set to production
// but we don't want that - all those webpack configs screw everything
config.set('mode', 'development')

// console.log('config is')
// console.log(config)

module.exports = config
