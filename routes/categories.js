const express = require('express');
const router = express.Router();
const db = require('../database');
/* GET home page. */
router.get('/', async function(req, res, next) {
	const categories = await db.select().from('categories');
	res.json(categories);
});

module.exports = router;
