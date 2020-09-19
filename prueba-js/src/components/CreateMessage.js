import React from 'react'
import { Form, Button } from 'react-bootstrap';

const CreateMessage = ({onChangeForm, createMessage}) => {

    return (
        
        <div className="mrgnbtm">
            <h2>Create Message</h2>
            
            <Form>
                <Form.Group controlId="message">
                    <Form.Label>Enter a message</Form.Label>
                    <Form.Control 
                        required
                        as="textarea" 
                        rows="4" 
                        onChange={(e) => onChangeForm(e)} 
                    />
                    
                </Form.Group>
                <Form.Group>
                    <Button
                        type="button"
                        onClick={(e) => createMessage()}
                        className="btn btn-danger"
                    >
                        Create
                    </Button>
                </Form.Group>
            </Form>
        </div>
       
    );
};

export default CreateMessage;