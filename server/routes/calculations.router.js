const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// This route handles the retrieval of all existing calculations from the database
// for display in the browser.
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "calculations";`;
    pool.query(queryText).then(response => {
        res.send(response.rows);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    });
});

// This route handles the addition of a calculation to the database.
router.post('/add', (req, res) => {
    const calculation = req.body;
    const queryText = `INSERT INTO "calculations" 
    ("expression", "equal_sign", "result") VALUES
    ($1, $2, $3);`;
    pool.query(queryText, [calculation.expression, 
    calculation.equal_sign, calculation.result]).then(response => {
        res.sendStatus(201);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    });
});

// This route deletes all calculations from the database.
router.delete('/clear', (req, res) => {
    const queryText = `DELETE FROM "calculations";`;
    pool.query(queryText).then(response => {
        res.sendStatus(204);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    });
});



module.exports = router;