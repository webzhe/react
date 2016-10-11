import React from 'react'
import ReactDOM from 'react-dom'

const Form = React.createClass({

    getInitialState(){
        return {
            inputVaule2: "zhe",
            inputVaule: "zhou",
            checkboxValue: false,
            radioValue: false,
            selectValue: "A"
        }
    },

    changeHandle(event){
        this.setState({inputVaule:event.target.value});

        //两种刷新方式
        // this.state.inputVaule = event.target.value;
        // this.forceUpdate();
    },

    changeHandle2(event){
        this.state.inputVaule2 = event.target.value;
    },

    changeCheckHandle(){
        this.setState({checkboxValue:!this.state.checkboxValue});
    },

    changeRadioHandle(){
        this.setState({radioValue:!this.state.radioValue});
    },

    changeSelectHandle(event){
        this.setState({selectValue:event.target.value});
    },

    render(){
        return <form>
            <input type="text" defaultValue="请输入" onChange={this.changeHandle2} />
            <input type="text" value={this.state.inputVaule} onChange={this.changeHandle} />
            <input type="checkbox" checked={this.state.checkboxValue} onChange={this.changeCheckHandle} />
            <input type="radio" checked={this.state.radioValue} onChange={this.changeRadioHandle} />
            <select value={this.state.selectValue} onChange={this.changeSelectHandle}>
                <option value="A">Aaaaa</option>
                <option value="B">Bbbbb</option>
                <option value="C">Ccccc</option>
            </select>
            <select multiple defaultValue={["A","B"]}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
            <textarea defaultValue="sdf"></textarea>
        </form>
    }
});


var div1 = document.createElement('div');
document.body.appendChild(div1);

ReactDOM.render(
    <Form />,
    div1
);



/*
defaultValue  与 value 不能同时使用  最终是使用的是value
*/
