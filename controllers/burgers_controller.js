const express = require('express');
const db = require('../models');
let router = express.Router();

router.get("/", (req, res) => {
	db.Burger.findAll({}).then( data => {
		res.render("index", {
			burgers: data
		})
	})
});

router.post("/", (req, res) => {
	db.Burger.create({
		burger_name: req.body.burger_name
	}).then( () => {
		res.redirect("/");
	});
});

router.put("/:id", (req, res) => {
	db.Burger.update({
		devoured: req.body.devoured
	}, {
		where: {
			id: req.params.id
		}
	}).then( () => {
		res.redirect("/");
	})
});

module.exports = router;