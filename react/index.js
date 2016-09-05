/**
 * Created by ZhouZhe on 2016/8/30.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

var Hello = React.createClass({
    render: function(){
        return <div><App /></div>
    }
});



var div1 = document.createElement('div');
document.body.appendChild(div1);

ReactDOM.render(
    <Hello />,
    div1
);
