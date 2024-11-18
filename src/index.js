const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars'); // Đúng cú pháp
const app = express();
const port = 3001;


// Cấu hình file tĩnh 

app.use(express.static(path.join(__dirname,'public')));


// Setup the HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine(
   { 
      extname : '.hbs' // đổi đuôi handlebars sang hbs,
      ,partialsDir: path.join(__dirname, 'resources\\views\\partials'),
      defaultLayout: 'main', // Chỉ định layout mặc định
   }  
   
)); // Dùng `engine` thay vì `handlebars()`
app.set('view engine', 'hbs'); // Sửa 'set view' thành 'view engine'
app.set('views', path.join(__dirname, 'resources\\views')); // Cấu hình đường dẫn đến thư mục views



// Routes
app.get('/', (req, res) => {
   res.render('home'); // Render file `home.handlebars`
});

app.get('/news', (req, res) => {
   res.render('news'); // Render file `home.handlebars`
});

// Start server
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
