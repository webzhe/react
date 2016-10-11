"use strict"
import {createStore, combineReducers} from 'redux'

//state -> { a:[] ,b:[] , c: {name, group:[]}}

//action A -> {type,data(String)}

// const reducers = {a:function(state, action){},b:function(state, action){}}

function aReducer(state, action){
    if(typeof state === 'undefined') return [];
    switch(action.type){
        case 'a':
            // state.push(action.data); X
            // return state; X
            return state.concat([action.data]);
        default:
            return state;
    }
}

function bReducer(state, action){
    if(typeof state === 'undefined') return [];
    switch(action.type){
        case 'b':
            return state.concat([action.data]);
        default:
            return state;
    }
}

function cNameReducer(state,action){
    if(typeof state === 'undefined') return "";
    if( action.type === "c" ){
        return action.name;
    }else{
        return state
    }
};

function cGroupReducer(state,action){
    if(typeof state === 'undefined') return [];
    if( action.type === "c" ){
        return state.concat(action.item);
    }else{
        return state;
    }
};
//cAction:{type,name,item}


function cReducer(state, action){
    if(typeof state === 'undefined') return {name:'',group:[]};
    switch(action.type){
        case 'c':
            return combineReducers({name:cNameReducer,group:cGroupReducer})(state,action);
        default:
            return state;
    }
}

const reducer = combineReducers({ a:aReducer , b:bReducer , c:cReducer });


const store = createStore(reducer,{a:[111],b:[222],c:{name:"",group:[]}});

store.subscribe(function listener(){
    console.log(store.getState());
});

let actionA = {
    type: "a",
    data: "leo"
};
let actionB = {
    type: "b",
    data: "zhe"
};

let actionC = {
    type: "c",
    name: "brightas",
    item: "123"
}


store.dispatch(actionA);
store.dispatch(actionB);
store.dispatch(actionC);
