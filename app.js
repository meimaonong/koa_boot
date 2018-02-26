const Koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')

const path = require('path')

// 引入 koa-static
const staticFiles = require('koa-static')

const app = new Koa()

// 指定 public目录为静态资源目录，用来存放 js css images 等
app.use(staticFiles(path.resolve(__dirname, "./public")))

app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'view'),// 指定视图目录
    nunjucksConfig: {
      trimBlocks: true // 开启转义 防Xss
    }
}))

app.use(bodyParser())


router.get('/', async (ctx, next) => {
    ctx.body = 'Index'
})

router.post('/home', async (ctx, next) => {
    //ctx.request.body
})

router.get('/home', async (ctx, next) => {
    await ctx.render('home/home',{
      btnName: 'GoGoGo'
    })
})

// 调用路由中间件
app.use(router.routes())

app.listen(2333, () => {
    console.log('server is running at http://localhost:2333')
})
