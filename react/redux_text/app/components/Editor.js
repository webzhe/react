import React from 'react'
import {FormGroup,FormControl,ControlLabel,Button} from 'react-bootstrap'

//props {submit(value)}
const Editor = React.createClass({
    submit(){
        let value = this.refs.textarea.value;
        this.props.submit(value);    //action
    }
    render(){
        return <form>
            <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Textarea</ControlLabel>
                <FormControl componentClass="textarea" ref="textarea" placeholder="textarea" />
            </FormGroup>
            <div>
                <Button onClick={this.submit}>添加</Button>
            </div>
        </form>
    }
});

export default Editor
