import {createStore} from 'redux'

const reducer = function (state,action){
    if( action.type == 'changeName' ){
        var newState = JSON.parse(JSON.stringify(state));
        return Object.assign({},state,{name:action.name});
    }else{
        return state;
    }
};

const store = createStore(reducer,{name:"zhe"});

var {subscribe,dispatch,getState} = store;

var state = getState();

var subscribe = store.subscribe;
store.subscribe(()=> console.log(store.getState()));




const action = {
    type:"changeName",
    name:"hulei"
}

store.dispatch(action);
