const router = require('express').Router();
const { db } = require('../services/dbConnection')

/**
 * Get all jobs from database
 */
router.route('/get').get((req, res) => {
    db.query('SELECT * FROM jobs', (err, results) => {
        if (err) throw err
        res.status(200).json(results.rows)
    })
})

module.exports = router;