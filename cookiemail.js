var express = require('express');
var cookieParser = require('cookie-parser');
var router = express.Router();
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/login', function(req, res, next) {
  let obj={
      auth:true,
  }
 // console.log(`cookies are : , ${req.cookie}`)
  res.cookie('userdata',obj);
  res.send('cookie created by anu');
});

//get token from cookie and verity token  
 router.get('/testRoute',function(req,res,next){
    console.log(`cookies are : , ${req.cookies}`);
    const tokenFromCookie = req.cookies.jwtToken.code;// step-4 collecting token from cookie
    const secret = 'QWER@#$^';
    jwt.verify(tokenFromCookie,secret,function(err,decoded){//step -5 verifying token
      if(err){
        res.status(401).send("incorrect token or missing token");
      }else{
        console.log(decoded.user)
        if(decoded.user=== 'IoneTech'){
          console.log("Token verified successfully");
          res.send("Token verified successfully");
        }
      }
      res.send(decoded.user);
    });
    res.send('no acess')
 })
 module.exports = router;