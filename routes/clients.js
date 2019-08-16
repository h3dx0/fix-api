const express = require('express');
const router = express.Router();
const db = require('../database');
/* GET home page. */
router.get('/', async function(req, res, next) {
	const clients = await db.select().from('clients');
	res.json(clients);
});

router.post('/add', async function(req,res,next){
	const body = req.body;
	const client = {
		name: body.name,
		last_name: body.last_name,
		email: body.email,
		mobil_phone: body.mobile,
		password: body.password,//TODO encriptar esto
		photo: body.photo
	}
	try {
		await db('clients').insert(client)		
		res.status(200).json({rc: 0, msg: "Saved!!"})
	} catch(e) {
		res.status(500).json({rc: -1, msg: e})
		console.log(e);
	}
})
module.exports = router;
