const knex = require('../database');

module.exports = {
    find: () => {
        return knex.select().from('brand');
    },
    
    findById: (params) => {
        return knex.select().from('brand').where('id', params.id);
    },

    create: (params) => {
        return knex.insert(params).into('brand');
    },

    update: (params) => {
        return knex('brand').update(params).where('id', params.id);
    },

    delete: (params) => {
        return knex('brand').del().where('id', params.id)
    }

}