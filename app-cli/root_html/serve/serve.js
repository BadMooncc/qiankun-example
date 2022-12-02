var express = require('express');
var path = require('path');
var proxyConfig = require('./config.js')
var httpProxy = require('http-proxy') // 代理框架
var proxy = httpProxy.createProxyServer() // 初始化代理
var router = express.Router();


var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').__express);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../')));


Object.keys(proxyConfig).forEach(item => {
  app.use(item, function(req, res, next) {
    // 将请求转发到代理配置中指定的服务地址
    proxy.web(req, res, {
      target: proxyConfig[item].target,
      pathRewrite: proxyConfig[item].pathRewrite
    }, error => {
      response.destroy(error)
      console.dir({
        source: req.url,
        target: `${proxyConfig[item].target}`,
        message: error.message,
      })
    })
  })
})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'udc-ui' });
});


// var server = http.createServer(app);
app.listen(5008);
console.log('server start port:5008')
