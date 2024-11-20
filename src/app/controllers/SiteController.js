
class SiteController{

    //[GET] /news
    index(req,res){
        res.render('home');
    }

    //[GET] /search
    search(req,res){
        res.render('search');
    }

}
// Tạo ra đối tượng để exports ra ngoài 
module.exports = new SiteController;