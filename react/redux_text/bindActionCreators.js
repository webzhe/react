"use strict"
import {createStore, combineReducers} from 'redux'

const store = createStore(function reducer(state={},action){
    switch(action.type){
        case "changeName":
            return Object.assign({},state,{name:action.name});
        default:
            return state;
    }
});

// ---------------------------- two
// function actionCreator(name){
//     return {
//         name,
//         type:"changeName"
//     }
// }
//
// store.dispatch(actionCreator('leo'));
// store.dispatch(actionCreator('zhe'));


// ---------------------------- three

// function createAction(action,dispatch){
//     return function(opt){
//         action = Object.assign({},action,opt,{type:action.type});
//         dispatch(action);
//     }
// }
//
// var action = createAction({type:"changeName",name:"leo"},store.dispatch);
//
// action();

// ------------------------------ four

function createActions(action,dispatch){
    function createAction(action,dispatch){
        return function(opt){
            action = Object.assign({},action,opt,{type:action.type});
            dispatch(action);
        }
    }
    if( typeof action === "function" ){
        return createAction(acction,dispatch);
    }

}
store.subscribe(function listener(){
    console.log(store.getState());
});
