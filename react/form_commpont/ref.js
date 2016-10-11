import React from 'react'
import ReactDOM from 'react-dom'

const Ref = React.createClass({

    click(){
        this.refs.inText.focus();
    },

    componentDidMount(){
        this.refs.inText2.focus();
        console.log(2);
    },

    render(){
        return <div>
            <input ref={function(dom){dom.focus();console.log(1)}} />
            <input ref="inText" />
            <input ref="inText2" />
            <button onClick={this.click}>commit</button>
        </div>
    }
});

const div1 = document.createElement('div');
document.body.appendChild(div1);

ReactDOM.render(
    <Ref />,
    div1
);
