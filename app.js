const Koa = require('koa')
const router = require('koa-router')()

const app = new Koa()

router.get('/', async (ctx, next) => {
    ctx.body = 'Index'
})

router.get('/home', async (ctx, next) => {
    ctx.body = 'Home'
})

// 调用路由中间件
app.use(router.routes())

app.listen(2333, () => {
    console.log('server is running at http://localhost:3000')
})
