/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-01-26 10:58:38
 **/
const http = require('http')

http.createServer(async (req, res) => {
  console.log('req url is ', req.url)
  if (req.url === '/test1') {
    res.end('reach test1')
  } else if (req.url === '/err') {
    let jif = 111
    // 如果存在消耗cpu的循环计算，会导致其他路由也无法及时响应
    for (let i = 0; i < 1e10; i++) {
      jif += i
    }
    res.end(jif)
  } else {
    res.end('request is end')
  }
}).listen(8406)

// 测试结论：单个路由报错，不会触发其他路由的崩溃。