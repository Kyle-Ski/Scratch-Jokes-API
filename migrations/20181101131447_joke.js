
exports.up = function(knex, Promise) {
    knex.schema.createTable('joke', function (table) {
        table.increments().notNullable()
        table.string('type')
        table.string('setup')
        table.string('punchline')
    })
};

exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExists('joke')
};
