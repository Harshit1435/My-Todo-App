import React, { useState } from 'react';


export default function TodoInput({setItem}){
    const change=(name,date,amount)=>{
        name.length === 0 || date.length === 0 ? alert("Please enter name & Date"):
        setItem(prevItem=>[{name:name, date:date},...prevItem]);
        // console.log(`We got a list name is ${name} date is ${date} and amount is ${amount}`);
        
    }
    const nameDate=(event)=>{
       setName(event.target.value);
    }
    const dateOfItem=(event)=>{
        setDate(event.target.value);
    }
    const[name,setName] = useState("");
    const[date, setDate] = useState("");
  

    const handleOnButton =()=>{
        change(name,date);
        setName("");
        setDate("");
    } 
    return(
        <>
        <div className='grid grid-cols-3  gap-4 text-center my-4 mx-4'>
            
                <div className='col-start-1 col-span-1 '>
                    <input className='' type="text" value={name} name="Harshit" id="" onChange={nameDate} placeholder='Type your item'/>
                </div>
                <div className='col-start-2 col-span-1 '>
                    <input className='' value={date} type="date" onChange={dateOfItem} name="" id="" />
                </div>
                <div className='col-start-3 col-end-3'>
                    <button className="border-4 border-solid border-green-700 w-20 text-white bg-green-700 rounded-md" type="button" onClick={handleOnButton}>+</button>
                </div>

           

        </div>
        <hr />
       
        </>
        )
    }