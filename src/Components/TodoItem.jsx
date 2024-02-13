import styles from "./TodoItem.module.css";
export default function TodoItem({item,todos,setTodos}){
      function handleDelete(item){
         // console.log("delete",item)
         // console.log({todos})
         // console.log(item)
         setTodos(todos.filter((todo)=>todo!==item))
      }
      // console.log(item)
   /* return(
        <ul>
            {items.map((item)=><li key={item}>{item}</li>)}
        </ul>
    )
    */
   function handleClick(name){
     const newTodos= todos.map((todo)=>todo.name===name?{...todo,done:!todo.done}:todo)
   //   console.log(newTodos)
   setTodos(newTodos)
   }
   const className=item.done?styles.completed:""
   return(
      <div className={styles.item}>
        <div className={styles.itemName}>
         <span className={className} onClick={()=>handleClick(item.name)}>
            {item.name}
         </span>
         <span>
            <button
             onClick={()=>handleDelete(item)}
             className={styles.delete}>x</button>
         </span>
         </div>
         <hr className={styles.line}/>
      </div>
   )
}