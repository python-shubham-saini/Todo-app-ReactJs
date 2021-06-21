import { TodoCard } from "./TodoCard"
export const Todos = (props) => {
    return (
        <div >
            {
                props.todos ?
                    props.todos.map((todo)=>{
                        return <TodoCard key={todo.id} todo={todo} doneTodos={props.doneTodos}/>
                    }):<div style={{margin:"50px"}}>No todos for today!! </div>
            }
        </div>
    )
}
