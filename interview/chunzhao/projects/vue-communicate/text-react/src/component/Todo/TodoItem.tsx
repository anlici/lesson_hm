import React,{ useState } from "react"; 
import Todos from "./Todos";
interface Todo {
    id: number;
    name: string;
    completed: boolean;
  }
const TodoItem:React.FC = () => {
    const [todos,setTodos] = useState<Todo[]>([])
    const [newTodo,setNewTodo] = useState<string>('')
    const addTodo = () => {
        if(newTodo.trim()) { // 输入不为空
            setTodos([...todos,{ id: Date.now(), name: newTodo, completed: false }])
            setNewTodo('');// 清空输入框
        }
    }
    const inputTodo = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value) // 获取输入框的值
    }
    const filteredTodos = todos.filter(todo => 
        todo.name.toLowerCase().includes(newTodo.toLowerCase())
    )
    const handleDeleteTodo = (id:number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const handleToggleTodo = (id:number) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo,completed:!todo.completed}:todo))
    }
    return (
        <>
            <h2>任务管理器</h2>
            <div>
                <input type="text" value={newTodo}
                  onChange={inputTodo} placeholder='输入待办事项' />
                <button onClick={addTodo}>添加</button>
            </div>
            {/* 任务管理列表 */}
            {
                filteredTodos.map(todo => (
                    <Todos 
                    key={todo.id}
                    id={todo.id}
                    name={todo.name}
                    completed={todo.completed}
                    onDelete={handleDeleteTodo}
                    onToggle={handleToggleTodo}
                    />
                ))
            }
           
        </>
    )
}
export default TodoItem