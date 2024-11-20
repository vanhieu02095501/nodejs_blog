const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars'); // Đúng cú pháp
const app = express();
const port = 3002;

const route = require('./routes');


// Cấu hình file tĩnh 

app.use(express.static(path.join(__dirname,'public')));


app.use(express.urlencoded({
   extended:true
}));// xử li dữ liệu dạng form
app.use(express.json()); // xử lí dạng code js gửi lên


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

// routes init
route(app);
// Start server
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
