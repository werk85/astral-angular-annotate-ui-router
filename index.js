var route = require('./passes/state');

module.exports = function (astral) {
	astral.register(route);
};