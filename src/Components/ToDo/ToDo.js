import './ToDo.css'

function ToDo({todo,toggleTask,removeTask}){

    return (
        <div key={todo.id} className="Barev">
            <div onClick={()=>toggleTask(todo.id)}>
                {todo.task}
            </div>
            <div onClick={()=>removeTask(todo.id)}>
                x
            </div>

        </div>
    )
}
export default ToDo