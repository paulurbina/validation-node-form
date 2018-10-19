const express = require('express');
const router = express.Router();

const Data_client_form = require('../models/Data_clien_form');

// Router url submit 
router.post('/users', async (req, res) => {
	const Data_clien_form = new Data_clien_form(req.body);
	await Data_clien_form.save();
	res.json({
		status: 'date clien save!'
	});
});

module.exports = router;