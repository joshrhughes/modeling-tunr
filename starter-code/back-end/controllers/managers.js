var db = require('../models');
var Manager = db.models.Manager;

function index(req, res) {
	Manager.findAll().then(function(managers) {
		res.json(managers);
	});
}

function show(req, res) {
	Manager.findById(req.params.id)
	.then((manager)=> {
		if(!manager) { res.send('manager not found') }
		else { res.json(manager) }
	});
}

function create(req, res) {
	Manager.create(req.body)
	.then((manager)=> {
		if(!manager) { res.send('manager not saved') }
		else { res.json(manager) }
	});
}

function update(req, res) {
	Manager.findById(req.params.id)
	.then((manager)=> {
		if(!manager) { res.send('manager not found') }
		return manager.updateAttributes(req.body);
	})
	.then((manager)=> {
		res.json(manager);
	});
}

function destroy(req, res) {
	Manager.findById(req.params.id)
	.then((manager)=> {
		if(!manager) { res.send('manager not found') }
		return manager.destroy();
	})
	.then(()=> {
		res.send('manager deleted');
	})
}

module.exports = { index, show, create, update, destroy };