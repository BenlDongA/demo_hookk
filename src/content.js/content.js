import { useEffect, useState, useRef, memo } from "react"
function Content (props){
    let [text, setText] = useState("") 
    let [todos, setTodos] = useState([]) 
    let inputTitle = useRef()

    useEffect(()=>{
        document.title = text
        },[text])
     useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/todos/')
          .then(response => response.json())
          .then(json => {
            setTodos(json)
          })
        },[])
        let data = todos.map((item)=>{
          return <li>{item.id}--{item.title}</li>
        })    
    return(
        <div>
        <button onClick={props.handleCount}>+</button>
        <h1>Hello hook</h1>

      Title{""}
      <input ref={inputTitle}
      onChange={(e) => 
      {setText(e.target.value)
      }}></input>
      <button onClick={()=>{
        inputTitle.current.focus();}}>Focus</button>
      <ul>
        {data}
      </ul>
      </div>
    )
}
export default memo(Content);