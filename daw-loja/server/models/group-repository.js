const knex = require('../database');

module.exports = {
    find: () => {
        return knex.select().from('group');
    },
    
    findById: (params) => {
        return knex.select().from('group').where('id', params.id);
    },

    create: (params) => {
        return knex.insert(params).into('group');
    },

    update: (params) => {
        return knex('group').update(params).where('id', params.id);
    },

    delete: (params) => {
        return knex('group').del().where('id', params.id)
    }

}