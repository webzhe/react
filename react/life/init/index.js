import React from 'react'
import ReactDOM from 'react-dom'


const Item = React.createClass({
    getDefaultProps(){
        console.log('get default props')
        return {
            group: 123
        }
    },
    getInitialState(){
        console.log('get initial state')
        return {
            name: 'Zhou'
        }
    },
    render(){
        return <h1>{this.props.group + this.state.name}</h1>
    }
});

var div1 = document.createElement('div');
document.body.appendChild(div1);
ReactDOM.render(
    <div>
        <Item />
        <Item />
        <Item />
    </div>,
    div1
);

/*
    调用了1次getDefaultProps    3次getInitialState

*/
