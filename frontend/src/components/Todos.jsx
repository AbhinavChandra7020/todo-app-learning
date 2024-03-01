
export function Todos({todos}){
  return <div>
    {todos.map((todo)=>{
        return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true ? "Done!":"Mark as completed"}</button>
        </div>
    })}
  </div>
}