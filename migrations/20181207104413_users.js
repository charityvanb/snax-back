
exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', (entityInTable) => {
        entityInTable.increments('id')
        entityInTable.string('fname')
        entityInTable.string('lname')
        entityInTable.string('email')
        entityInTable.string('hashed_password')
	});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
};
