const Koa = require('koa')
// test
const app = new Koa()

app.use(async ctx => {
    ctx.body = 'Hello'
})

app.listen(2333, () => {
    console.log('listen on 2333')
})
