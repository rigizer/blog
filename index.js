const express = require('express');
const bodyParser = require('body-parser');      // POST 요청 처리
const app = express();                          // Node.js Express

const expressErrorHandler = require('express-error-handler');
const errorHandler = expressErrorHandler({
    static: {
        '404': './public/404.html', 
        '500': './public/500.html'
    }
});

// Other Settings
app.set('view engine', 'pug');                          // 템플릿 엔진 설정
app.set('views', __dirname + '/views');                 // __dirname 시스템 변수: request.getContextPath();
app.use(bodyParser.urlencoded({extended: true}));       // POST 요청을 처리하는 기능(미들웨어)을 확장

// Routes
const routes = require('./routes');
app.use('/blog', routes);
app.use('/', 
    routes.get('/', (req, res) => {
        res.redirect('/blog');
    })
);

app.use(expressErrorHandler.httpError(404));
app.use(expressErrorHandler.httpError(500));
app.use(errorHandler);

// Server Port Setting
const port = 8000;
app.listen(port, function() {
    console.log('SERVER ON! PORT: ' + port);
});