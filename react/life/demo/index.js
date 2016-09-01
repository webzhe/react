import React from 'react'
import ReactDOM from 'react-dom'


const list = [];
const database = {
    add(article){
        list.push(article);
        return list.length -1;
    },
    del(index){
        list[index] = null;
    },
    update(index,newArticle){
        list.splice(index,1,newArticle);
    },
    get(){
        return list;
    }
};





const Item = React.createClass({
    getDefaultProps(){
        return {
            value: 'no value'
        }
    },
    getInitialState(){
        return {
            value: this.props.value,
            currentHistoryIndex: 0,
            history: [this.props.value]
        }
    },
    //即将加载
    componentWillMount(){
        this.state.dbkey = database.add({value:this.state.value});
    },
    //加载完成   这个阶段可以和外部框架或者外部库结合一起用，操作DOM对象
    componentDidMount(){

        const dom = ReactDOM.findDOMNode(this);
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
        this.state.value = nextProps.value;
    },

    shouldComponentUpdate(nextProps,nextState){
        return true;
    },

    //即将更新
    componentWillUpdate(nextProps,nextState){
        //setState && forceUpdate 不能调用这两个  不然会照成死循环
        //update database
        let dbkey = this.state.dbkey;
        database.update(dbkey,{value:this.state.value});
    },

    //更新完成
    componentDidUpdate(oldProps,oldState){
        let dom = ReactDOM.findDOMNode(this);
        let oldStyle = dom.style.border;
        dom.style.border = '2px solid blue';
        setTimeout(function(){
            dom.style.border = oldStyle;
        },2000)
    },
    update(){

    },
    changeValue(event){
        this.setState({value:event.target.value});
    },
    save(){ //history
        //this.state.history.push(this.state.value);
        //this.state.currentHistory = this.state.value;

        //javascript es6
        const value = this.state.value;
        const history = this.state.history;
        const currentHistoryIndex = history.length;
        history.push(value);
        this.setState({
            currentHistoryIndex,
            history
        });
    },
    prev(){
        let currentHistoryIndex = this.state.currentHistoryIndex;
        if( currentHistoryIndex !== 0 ){
            currentHistoryIndex -= 1;
            this.setState({currentHistoryIndex});
        }
    },
    next(){
        let currentHistoryIndex = this.state.currentHistoryIndex;
        if( currentHistoryIndex !== this.state.history.length - 1 ){
            currentHistoryIndex += 1;
            this.setState({currentHistoryIndex});
        }
    },
    render(){
        console.log('render')
        return <h1>
            <div>
                <button onClick={this.prev}> prev </button>
                <span>{this.state.history[this.state.currentHistoryIndex]}</span>
                <button onClick={this.next}> next </button>
            </div>
            <input value={this.state.value} onChange={this.changeValue} /><button onClick={this.save}>save</button>
        </h1>
    },

    componentWillUnmount(){
        clearInterval(this.state.loopNum);
    }
});

//
//class Item extends React.Component{
//    render(){
//        return <button onClick={this.next.bind(this)}> next </button>
//    }
//}





var div1 = document.createElement('div');
document.body.appendChild(div1);

ReactDOM.render(
    <div>
        <Item />
    </div>,
    div1
);

