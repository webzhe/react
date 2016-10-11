import React from 'react'
import ReactDOM from 'react-dom'

const Comp = React.createClass({

    getInitialState(){
        return {
            top: 0,
            left: 0

        }
    },

    keyup(event){
        switch(event.keyCode){
            case 37://左
                this.setState({left:this.state.left - 5});
                break;
            case 38://上
                this.setState({top:this.state.top - 5});
                break;
            case 39://右
                this.setState({left:this.state.left + 5});
                break;
            case 40://下
                this.setState({top:this.state.top + 5});
                break;
        }
    },

    render(){
        return <div ref={dom=>{if(dom)dom.focus()}} style={{position:"relative",width:"450px",height:"450px",background:"yellow"}} tabIndex={1} onKeyDown={this.keyup}>
            <div style={{top:this.state.top+"px",left:this.state.left+"px",position:"absolute",width:"10px",height:"10px",background:"red"}}></div>
        </div>
    }
});


const div1 = document.createElement('div');
document.body.appendChild(div1);
ReactDOM.render(
    <Comp />,
    div1
);
