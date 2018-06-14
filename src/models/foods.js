'use strict';

const storage = require('../lib/storage/data-store.js');
const uuid = require('uuid/v1');

class Food{

    constructor(config) {

        this.is = uuid();
        this.createdOn = new Date();
        this.title = config && config.title || '';
        this.content = config && config.content || '';
    }

    save(){
        return storage.save(this);
    }

    static fetchAll(){
        return storage.getAll();
    }

    static findOne(id){
        return storage.get(id);
    }

    static deleteOne(id) {
        return storage.delete(id);
    }

}

module.exports = Food;