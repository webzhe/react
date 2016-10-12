import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, bindActionCreators } from 'redux'
import {connect, Provider } from 'react-redux'

function reducer(state,action){
    if( typeof state === 'undefined' ){
        return { name: "", num: 0 };
    }
    switch(action.type){
        case "changeName":
            return Object.assign({},state,action.payload);
        case "access":
            return Object.assign({},state,{ num: 1 + state.num });
        default:
            return state;
    }
}

const store = createStore(reducer);

let actions = {
    changeName(name){
        return{
            type:"changeName",
            payload:{name}
        }
    },
    access(){
        return {
            type:"access"
        }
    }
}


// actions = bindActionCreators(actions,store.dispatch);


//----------------------------------------------------------------------------------
let UI = React.createClass({
    render(){
        return <div>
            <p>{this.props.name}</p>
            <p>{this.props.num}</p>
            <input onChange={event => this.props.changeName(event.target.value)} />
            <button onClick={event => this.props.access()}>access</button>
        </div>
    }
});



function getState(state,prop){
    // return (state) => {
    //     return state;
    // }
    return store.getState();
}

// function getAction(){
//     return actions;
// }

UI = connect(getState,actions)(UI);

var div = document.createElement('div');
document.body.appendChild(div);
ReactDOM.render(
    <Provider store={store}>
        <UI />
    </Provider>,
    div
);

store.subscribe(function listener(){
    console.log(store.getState());
});
// var div = document.createElement('div');
// document.body.appendChild(div);
// function render(){
//     let state = store.getState();
//     ReactDOM.render(<UI changeName={actions.changeName} access={actions.access} name={state.name} num={state.num} />,div);
// }
// store.subscribe(render);
//
// render();
