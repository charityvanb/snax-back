exports.up = function(knex, Promise) {
    return knex.schema.createTable('reviews', (review) => {
        review.increments('id')
        review.string('title')
        review.string('text', [500])
        review.integer('rating')
        review.integer('snack_id')
        // review.foreign('snack_id').references('snack.id')
        review.integer('user_id')
        // review.foreign('user_id').references('user.id')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('reviews')
};
