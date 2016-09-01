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
            name: 'Zhou',
            isRed: false
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

        this.state.loopNum = setInterval(function(){
            if(isYellow){
                dom.style.background = 'red';
                isYellow = false;
            }else{
                dom.style.background = 'yellow';
                isYellow = true;
            }
        },1000);
    },

    componentWillReceiveProps(nextProps){
        // state
        console.log('component will receive props');
    },

    shouldComponentUpdate(nextProps,nextState){
        console.log('should component update');
        return true;
        //根据这个真假 是否调用 componentWillUpdate 和 componentDidUpdate
    },

    //即将更新
    componentWillUpdate(nextProps,nextState){
        console.log('component will update');
    },

    //更新完成
    componentDidUpdate(oldProps,oldState){
        console.log('component did update');
    },
    update(){
        if( this.state.isRed ){
            this.setState({name: 'Lei'});
            this.setState({isRed: false});
        }else{
            this.setState({name: 'Zhou1'});
            this.setState({isRed: true});
        }

        // this.forceUpdate();//强制刷新
    },
    render(){
        console.log('render')
        return <h1>{this.props.group + this.state.name}<button onClick={this.update}>更新</button></h1>
    },

    componentWillUnmount(){
        console.log('component will unmount')
        clearInterval(this.state.loopNum);
    }
});


var div1 = document.createElement('div');
var clear = document.createElement('button');
var add = document.createElement('button');
add.innerHTML = 'add';
clear.innerHTML = 'clear';
document.body.appendChild(div1);
document.body.appendChild(clear);
document.body.appendChild(add);
function render(bool){
    ReactDOM.render(
        <div>
            {bool ? <Item /> : ""}
        </div>,
        div1
    );
}
// const List = React.createClass({
//     render(){
//         return <div>
//             <Item />
//         </div>
//     }
// });
render(true);
clear.onclick = function(){
    render(false);
};
add.onclick = function(){
    render(true);
};
// render();
/*
    调用了1次getDefaultProps    3次getInitialState

    componentWillMount    componentDidMount   都只调用一次

    刷新3种情况
        1、外部调用
        2、更新setState
        3、调用forceUpdate() 强制刷新

    强制刷新不会执行shouldComponentUpdate()  这个方法
    而内部setState 会根据 shouldComponentUpdate() 返回的真假是否执行
    外部调用render() 也会根据shouldComponentUpdate() 返回的真假是否执行

    componentWillReceiveProps  只针对外部调用render()才会执行
*/
