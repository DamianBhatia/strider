const router = require('express').Router();
const fs = require('fs');
const { db } = require('../services/dbConnection');

/**
 * Get all jobs from database
 */
router.route('/get').get((req, res) => {
    var q = fs.readFileSync('sql/get_all_jobs.sql').toString();
    db.query(q, (err, results) => {
        if (err) throw err
        res.status(200).json(results.rows)
    })
})

module.exports = router;
