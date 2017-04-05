var xtend = require('xtend');
var Request = require('./request');
var Errors = require('./errors');
var Collection = require('./collection');

function Model (indexBy) {
    var Crud = Collection(indexBy);
    function model () {
        return xtend(Request(), Errors(), Crud());
    }
    model.update = xtend(Request.update, Errors.update, Crud.update);
    return model;
}

module.exports = Model;

