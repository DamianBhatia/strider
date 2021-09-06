const router = require('express').Router();
const { create } = require('domain');
const fs = require('fs');
const {db} =require('../services/dbConnection')
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
    var createUser = fs.readFileSync('sql/create_new_user.sql').toString();
    db.query(createUser,[firstName,lastName,email,password],(err, results) => {
        if (err) throw err
        res.status(200).json(results)
    })
})

module.exports = router;