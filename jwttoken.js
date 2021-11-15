var express = require('express');
const jwt = require('jsonwebtoken');
const { token } = require('morgan');
var router = express.Router();

/* GET users listing. */
router.get('/anutoken', function(req, res, next) {
    console.log('Heloooooooooo');
    let tokenGen;
    const secret = 'QWER@#$^';
    //generate token
    jwt.sign({ user: 'IoneTech' },secret, function(err, token) { //step-1 creating token
        if (err) {
            console.log(err);
            res.status(500).send(err);
            return;
        } else {
            console.log('inside');
            tokenGen = token;
            console.log(token);
            const tokenObj={
                code :token
            }
            res.cookie('jwtToken',tokenObj);//step-2 creating cookie and loading cookie
            res.send('Token created');
        }
      });
});

module.exports = router;