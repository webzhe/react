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
    //即将加载
    componentWillMount(){
        console.log('component will mount')
        this.state.name = 'Zhe';
    },
    //加载完成   这个阶段可以和外部框架或者外部库结合一起用，操作DOM对象
    componentDidMount(){
        console.log('component did mount')
        const dom = ReactDOM.findDOMNode(this);
        console.log(dom);

        let isYellow = false;

        setInterval(function(){
            if(isYellow){
                dom.style.background = 'red';
                isYellow = false;
            }else{
                dom.style.background = 'yellow';
                isYellow = true;
            }
        },1000);
    },
    render(){
        console.log('render')
        return <h1>{this.props.group + this.state.name}</h1>
    }
});

var div1 = document.createElement('div');
document.body.appendChild(div1);
ReactDOM.render(
    <div>
        <Item />
    </div>,
    div1
);

/*
    调用了1次getDefaultProps    3次getInitialState

    componentWillMount    componentDidMount   都只调用一次

*/
