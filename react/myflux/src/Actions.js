const EventEmitter = require('events').EventEmitter;

class Actions extends EventEmitter{
    constructor(){
        super();
    }

    add(name){
        var action = {
            actionType: "add",
            name
        };

        this.emit('create',action);
    }

    del(id){
        var action = {
            actionType: "del",
            id
        };

        this.emit('call',action);
    }
}

export default Actions
