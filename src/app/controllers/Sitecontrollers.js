const res = require("express/lib/response");

class SiteConstroller
{
    index(req, res)
    {
        res.render('home');
    }
    search(req, res)
    {
        res.render('search');
    }
}
module.exports = new  SiteConstroller;