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
    }
}