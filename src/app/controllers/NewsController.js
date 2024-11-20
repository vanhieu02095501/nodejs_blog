
class NewsController{

    //[GET] /news
    index(req,res){
        res.render('news');
    }

    //[GET] /news:slug
    show(req,res){
        res.send('xin chào');
    }

}
// Tạo ra đối tượng để exports ra ngoài 
module.exports = new NewsController;