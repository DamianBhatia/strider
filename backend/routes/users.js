const router = require('express').Router();
const { create } = require('domain');
const fs = require('fs');
const {db} =require('../services/dbConnection')
const {encrypt,dcrypt,test} = require('../services/crypt')

/**
 * add user to db end point 
 */
router.route('/add').post((req,res)=>{
    const {
        firstName,
        lastName,
        email,
        password,
    }= req.body
    const hash = encrypt(password);
    var createUser = fs.readFileSync('sql/create_new_user.sql').toString();
    db.query(createUser,[firstName,lastName,email,hash],(err, results) => {
        if (err) throw err
        res.status(200).json(results)
    })
})

router.route('/login/:email/:password').get((req,res)=>{
    const {
        email,
        password,
    } = req.params

    console.log(req.params)
    const getUser = fs.readFileSync('sql/get_user.sql').toString()
    let isGoodCredentials;
    db.query(getUser, [email],(err,results) => {
        if (err) throw err
        if (results.rows.length > 0){
            const {rows: [{password: hash}]} = results
            isGoodCredentials = dcrypt(password, hash)
        }else{
            isGoodCredentials = false;
        }
        
        res.status(200).json(isGoodCredentials)
        
    })

    return isGoodCredentials 
})

module.exports = router;