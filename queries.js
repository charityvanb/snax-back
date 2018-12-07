const database = require('./database-connection')

module.exports = {
    listAll() {
        return database('snacks')
    },

    getById(id) {
        return database('snacks').where({id: id}).first() 
    }, 

    createSnack(newSnack) {
        return database('snacks').insert(newSnack).returning('*')
    }, 

    deleteSnack(id) {
        return database('snacks').where('id', id).delete()
    }, 

    updateSnack(id, snack) {
        return database('snacks').where('id', id).update(snack).returning('*')
    }, 

    listAllUsers() {
        return database('users')
    },

    getByIdUsers(id) {
        return database('users').where({id: id}).first() 
    }, 

    createUser(newUser) {
        return database('users').insert(newUser).returning('*')
    }, 

    deleteUser(id) {
        return database('users').where('id', id).delete()
    }, 

    updateUser(id, user) {
        return database('users').where('id', id).update(user).returning('*')
    }, 

    listAllReviews() {
        return database('reviews')
    },

    getByIdReviews(id) {
        return database('reviews').where({id: id}).first() 
    }, 

    createReview(newReview) {
        return database('reviews').insert(newReview).returning('*')
    }, 

    deleteReview(id) {
        return database('reviews').where('id', id).delete()
    }, 

    updateReview(id, review) {
        return database('reviews').where('id', id).update(review).returning('*')
    }, 
}