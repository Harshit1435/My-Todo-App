import React, { } from 'react'

export default function AddTodo({initialTodoItems, removeItem}) {
    // const[item, setItem] = useState(initialTodoItems)

    const handleRemove =(index)=>{
        removeItem(index)
    }
  return (
    <>
    
    {initialTodoItems.map((item,index)=>(
      <div key={index} className="grid grid-cols-3 gap-4 text-center mx-4 my-1">
        <div  className="col-start-1 col-end-1">{item.name}</div>
        <div  className="col-start-2 col-end-2">{item.date}</div>
        <div className='col-start-3 col-end-3'>
        <button  type="button" className="text-center items-center button1 border-4 border-solid border-red-700 w-10 rounded text-white bg-red-700 " onClick={()=>handleRemove(index)}>-</button>
            </div>  
      
      </div>
      ))}
   
    </>
  )
}

