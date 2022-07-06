import React, {useEffect, useState} from "react";
import './Contact.css'
import ToDoForm from "../../Components/ToDoForm/ToDoForm";
import ToDo from "../../Components/ToDo/ToDo";
import { setLoading } from "../../redux/contact/contact.action";
import { useDispatch, useSelector } from 'react-redux';




const Contact = ()=> {

    
    const dispatch = useDispatch()
    const lodr = useSelector((state)=>state.contact.loading)

    useEffect(()=>{
        dispatch(setLoading)
    },[])

    alert(lodr)
    const [todos,setToDos] = useState([])

    const addTask = (userInput)=>{
        if(userInput){
            const newItem ={
                id:Math.random().toString(36).substr(2,9),
                task:userInput,
                complete: false
            }
            setToDos([...todos,newItem])
            console.log(newItem);
        }
    }

    const removeTask = (id) => {
        setToDos([...todos.filter((todo)=> todo.id !== id)])
    }
    const handleToggle = (id)=>{
        setToDos([
            ...todos.map((todo)=>
                todo.id === id?{...todo,complete: !todo.complete}:{...todo}
            )
        ])
    }
    return (
        <div>
            <div>
                <h1>Cank: {todos.length}</h1>
            </div>
            <ToDoForm addTask={addTask}/>
            {todos.map((todo)=>{
                return (
                    <ToDo
                    todo={todo}
                    key={todo.id}
                    toggleTask={handleToggle}
                    removeTask={removeTask}
                    />
                )
            })}
        </div>
    );
}
export default Contact;