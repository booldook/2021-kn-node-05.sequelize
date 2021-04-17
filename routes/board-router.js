const express = require('express')
const router = express.Router()
const { Board } = require('../models')

router.get('/create', async (req, res, next) => {
	rs = await Board.create({
		title: '테스트',
		writer: '별주부',
		content: '내용내용',
		UserId: 1
	})
	res.json(rs)
})

router.get('/list', async (req, res, next) => {
	rs = await Board.findAll({
		where: {
			id: 1
		}
	})
	res.json(rs)
})

router.get('/update/:id', async (req, res, next) => {
	rs = await Board.update({
		title: '바뀐제목'
	}, {
		where: {
			id: req.params.id
		}
	})
	res.json(rs)
})

router.get('/delete/:id', async (req, res, next) => {
	rs = await Board.destroy({
		where: {
			id: req.params.id
		}
	})
	res.json(rs)
})


module.exports = router