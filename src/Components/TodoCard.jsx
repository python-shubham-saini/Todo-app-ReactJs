import React from 'react'
import { Card, Button } from 'react-bootstrap'

export const TodoCard = (props) => {
    return (
        <Card  style={{ width: '18rem', margin: "44px", border: "solid 1px black" }}>
            <Card.Body>
                <Card.Title>{props.todo.title}</Card.Title>
                <Card.Text>
                    {props.todo.desc}
                </Card.Text>
                <Button variant="outline-danger" onClick={()=>{props.doneTodos(props.todo)}}>Done😄</Button>
            </Card.Body>
        </Card>
    )


}
