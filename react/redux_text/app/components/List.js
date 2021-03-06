import React from 'react'
import {ListGroup,ListGroupItem} from 'react-bootstrap'

const List = React.createClass({
    render(){
        let list = this.props.list.map(item => {
            return <ListGroupItem>item</ListGroupItem>
        })
        return <ListGroup>
            {list}
        </ListGroup>
    }
});

export default List
