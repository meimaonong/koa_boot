const path = require('path')
const ip = require('ip')

const miLog = require('./mi-log')
module.exports = (app) => {

  app.use(miLog({
    env: app.env, // koa 提供的环境变量
    projectName: 'koa2-tutorial',
    appLogLevel: 'debug',
    dir: 'logs',
    serverIp: ip.address()
  }))

}