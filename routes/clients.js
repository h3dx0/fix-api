const express = require('express');
const router = express.Router();
const db = require('../database');
/* GET home page. */
router.get('/', async function(req, res, next) {
	const clients = await db.select().from('clients');
	res.json(clients);
});

module.exports = router;
