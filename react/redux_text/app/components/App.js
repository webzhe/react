import React from 'react'
import ReactDOM from 'react-dom'
import Editor from './Editor'
import List from './List'
import redux from 'redux'
import {connect,Provider} from 'react-redux'

function reducer(state,action){
    if( typeof state === "undefined" ){
        return  {list:[]};
    }
    switch(action.type){
        case "add":
            let list = state.list.concat(action.value);
            return Object.assign({},state,{list});
        default:
            return state;
    }
}



const store = redux.createStore(reducer,{list:[]});

const actions = {
    submit(value){
        return {
            type:"add",
            value
        }
    }
}


let App = React.createClass({
    render(){
        return <Provider store={store}>
            <List />
            <Editor />
        </Provider>
    }
});



ReactDOM.render(
    <App />,
    document.body
);

App = connect(state => store.state,action)(App)
