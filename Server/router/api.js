const router = require('koa-router')()

const docController = require('./../controller/doc')
const wxController = require('./../controller/wechat')

const routers = router
    .get('/doc/getTopicList', docController.getTopicList)
    // 微信相关请求
    .get('/wechat/initWx', wxController.initWx)
    .get('/wechat/getUser', wxController.getUser)
    .post('/wechat/getSignature', wxController.getSignature)

module.exports = routers