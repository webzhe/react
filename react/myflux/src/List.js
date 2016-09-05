import React from 'react'
import Store from './Store'

const store = new Store();

//Top level Component , container and controller-view
class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: []
        };
    }

    add(){
        //伪代码
        store._add(this.refs.nameInput.value);
    }

    componentDidMount(){
        store.on('change', list => {
            this.setState({list});
        })
    }

    render(){
        return <div>
            <input ref="nameInput" placeholder="请输入内容" defaultValue="" />
            <button onClick={this.add.bind(this)}> add </button>
            <ul>
                {
                    this.state.list.map( (item,index) => <li key={index}>{item}</li> )
                }
            </ul>
        </div>
    }
}

export default List
