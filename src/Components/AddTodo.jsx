import React from 'react';
import { Form, Button, Col} from 'react-bootstrap';
import { useState } from 'react';


export const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e) =>{
        e.preventDefault();
        // console.log(title,desc)
        if (!title || !desc){
            alert("Title or Description can not be blank")
        }else{
            // setTitle("");
            // setDesc("");
            props.addTodo(title, desc);
        }
    }
    return (
        <Form style={{margin:"25px", }}>
             <Col>
                <Form.Group className="todo-form-container" controlId="formBasicEmail"  >
                    <Form.Label >Todo Title</Form.Label>
                    <Form.Control placeholder="Enter your todo Title" onChange={(e)=>{setTitle(e.target.value)}} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Todo Description</Form.Label>
                    <Form.Control placeholder="Type your compelete todo Description" onChange={(e)=>{setDesc(e.target.value)}}/>
                </Form.Group>
                <Button variant="primary" type="submit" style={{margin:"10px"}} onClick={submit}>
                    Add
                </Button>
            </Col>
        </Form>
    )
}
