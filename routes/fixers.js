const express = require('express');
const router = express.Router();
const db = require('../database');
/* GET home page. */
router.get('/', async function(req, res, next) {
	const fixers = await db.select().from('fixers');
	res.json(fixers);
});

module.exports = router;
