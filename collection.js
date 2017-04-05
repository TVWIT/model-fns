var xtend = require('xtend');
var Collection = require('./lib/collection');

function Data (indexBy) {
    var collection = Collection(indexBy);

    function data () {
        return { data: {} };
    }

    data.update = ['get', 'edit', 'add', 'delete']
        .reduce(function (acc, method) {
            acc[method] = function (state, ev) {
                return xtend(state, {
                    data: collection[method](state.data, ev)
                });
            };
            return acc;
        }, {})
    ;
    return data;
}

module.exports = Data;
