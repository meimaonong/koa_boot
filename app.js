const Koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(bodyParser())

router.get('/', async (ctx, next) => {
    ctx.body = 'Index'
})

router.post('/home', async (ctx, next) => {
    //ctx.request.body
})

router.get('/home', async (ctx, next) => {
    ctx.body = 'Home'
})

// 调用路由中间件
app.use(router.routes())

app.listen(2333, () => {
    console.log('server is running at http://localhost:2333')
})
