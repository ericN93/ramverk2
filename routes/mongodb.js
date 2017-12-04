let express = require('express');
let router = express.Router();
let mongodb = require('../mongodb/mongodb');
let ObjectId = require('mongodb').ObjectID;

router.get('/', (req, res, next) => {
	mongodb.find({}, {}, 0)
		.then((db) => {
			console.log(db)
			res.render('mongodb', {
				title: 'Mongodb',
				mongodb: db
			});
		})
		.catch((err) => {
			console.log(err)
		});
});

router.get('/save/:name-:phone-:city-:age-:id', (req, res, next) => {
	let id = req.params.id !== 'null' ? {_id: ObjectId(req.params.id)} : {name: ''};
	let obj = {
		name: req.params.name,
		phone: req.params.phone,
		city: req.params.city,
		age: req.params.age
	};

  mongodb.save(id, obj)
  	.then((db) => {
  		res.redirect('/mongodb');
		})
		.catch((err) => {
			console.log(err)
		});
});

router.get('/delete/:id', (req, res, next) => {
  mongodb.remove({_id: ObjectId(req.params.id)})
  	.then((db) => {
  		res.redirect('/mongodb');
		})
		.catch((err) => {
			console.log(err)
		});
});

module.exports = router;
