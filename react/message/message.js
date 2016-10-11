import React from 'react'
import ReactDOM from 'react-dom'

const Item = React.createClass({
    render(){
        return <li>{this.props.name}</li>
    }
});

const Comp = React.createClass({
    render(){
        return <ul>
            {this.props.data.map(item=><Item name={item}/>)}
        </ul>
    }
});

const list = [
    'AAA',
    'BBB',
    'CCC',
    'DDD'
];

const div1 = document.createElement('div');
document.body.appendChild(div1);

ReactDOM.render(
    <Comp data={list} />,
    div1
);
