const express = require('express')
const router = express.Router()
const { User } = require('../models')

router.get('/create', async (req, res, next) => {
	rs = await User.create({
		userid: 'user4',
		userpw: '1234',
		username: '유저1',
		email: 'user1@naver.com'
	})
	res.json(rs)
})


module.exports = router