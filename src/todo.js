

import './todo.css'
import React,{useState} from 'react';


import person from './person.jpg'
import bin from './bin.jpg'
import calender from './calender.jpg'
import calender1 from './calender1.jpg'
import chec from './chec.jpg'
import contro from './contro.jpg'
import infinite from './infinite.jpg'
import list from './list.jpg'
import mark from './mark.jpg'
import perfect from './perfect.jpg'
import pp from './pp.jpg'
import reminder from './reminder.jpg'
import star from './star.jpg'
import sun from './sun.jpg'
import house from './house.jpg'
import three from './three.jpg'


function Todo(){
  const[list, setList]= useState([]);
  const[input, setInput]= useState("");
  const addTodo= (todo)=>{
    const NewTodo= {
      id:Math.random(),
      todo:todo 
    }
  }
  setList([...list, newTodo])
  setInput

  return(<body>
    <div>
      <h1>To do List</h1>
      </div>

  <div class="Rec2"></div>
  <div class="Rec1"></div>
  <input type="text" value={input}onChange={(e)=>setInput(e.target.value)} class="Rec3"></input>
  
 
  <div type="text" placeholder="" class="Rec4"/>
  
 
<input type="text" placeholder="search" class="Rec8"/>
<div class="circle"></div>


<div class="b">BIRIVIRI</div>
<div class="chi">CHILL</div>
<div class="untitled">Untitled group</div>
<div class="myday">My Day</div>
<div class="important">Important</div>
<div class="planned">Planned</div>
<div class="all">All</div>
<div class="completed">Completed</div>
<div class="assigned">Assigned to Me</div>
<div class="task1">Task</div>
<div class="chill">Chill</div>


<div class="new">+ New List</div>
<button class="atask">+ Add a Task</button>



<div>
    <img class="person" src={person}/>
    
   
    <img class="bin" src={bin}/>
    <img class="calender" src={calender}/>
    
    <img class="chec" src={chec}/>
    <img class="contro" src={contro}/>
    <img class="infinite" src={infinite}/>
    <img class="list" src={list}/>
    <img class="mark" src={mark}/>
   
    <img class="pp" src={pp}/>
    <img class="reminder" src={reminder}/>
   
    <img class="star" src={star}/>
    <img class="sun" src={sun}/>
    <img class="house" src={house}/>
    <img class="three" src={three}/>
    

  
</div> 





  </body>)


}












  export default Todo;