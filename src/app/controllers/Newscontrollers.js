const res = require("express/lib/response");

class NewConstroller
{
    index(req, res)
    {
        res.render('new');
    }
    show(req , res)
    {
        res.send('new detail');
    }
}
module.exports = new  NewConstroller;