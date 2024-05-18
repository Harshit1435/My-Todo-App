import { useState } from "react"
import AddTodo from "./Components/AddTodo"
import TodoInput from "./Components/TodoInput"
import AppName from "./Components/AppName"

export default function App(){
  // let initialTodoItems = [{name:'Harshit', date:"11/45/2001"},{name:"Rohan",date:"24/23/2005"},{name:"Keshav",date:"18/18/2009"}]
  let initialTodoItems = []
  const[item, setItem] = useState(initialTodoItems)

  const removeItem = (index) => {
    setItem(prevItems => prevItems.filter((_, i) => i !== index));
  };
  
  // console.log(item[0].name)
  return( 
      <> 
      <AppName/>
      < TodoInput setItem={setItem}/>
     {item.length===0 ? <div className="text-center text-2xl">Please enter your task</div>  :<AddTodo initialTodoItems={item} removeItem={removeItem}/>}
      </>
    )
  }
  
  