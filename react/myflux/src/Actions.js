const Store = Symbol('store');

export class Actions default {
    constructor(_store){
        this[store] = _store;
    }

    add(name){
        this[store]._add(name);
    }
}
