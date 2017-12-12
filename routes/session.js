// app.get('/', function(req, res, next) {
//   var sess = req.session
//   if (sess.views) {
//     sess.views++
//     res.setHeader('Content­Type', 'text/html')
//     res.write('<p>views: ' + sess.views + '</p>')
//     res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
//     res.end()
//   } else {
//     sess.views = 1
//     res.end('welcome to the session demo. refresh! id' + req.session.id )
//   }
// })

// app.get('/del', function(req, res, next) {
//     if (req.session) {
//          req.session.destroy(function() {});
//     }
//     res.end('Session destroed ! id:' + req.session.id )
//    })

// res.cookie('name', 'Peter', { expires: new Date(Date.now()      + 60000), httpOnly: true });