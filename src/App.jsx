import './App.css'
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [textInput, setTextInput] = useState('')
  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem('array')
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  useEffect(() => {
    localStorage.setItem('array', JSON.stringify(todoList))
  }, [todoList])

  const handleAddTodo = (text) => {
    if (textInput.trim() === '') { return }

    const newTodo = {
      id: Math.floor(Math.random() * 100000),
      name: text,
      isCompleted: false
    }

    setTodoList((prevTodoList) => [...prevTodoList, newTodo])
  }

  const handleDeleteTodo = (id) => {
    setTodoList((prevTodoList) => prevTodoList.filter(todo => todo.id !== id))
  }

  const handleCompleteTodo = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    )
  }

  return (
    <>
      <div className='h-screen flex flex-col items-center mt-10'>
        <Header />
        <TodoForm handleAddTodo={handleAddTodo} setTextInput={setTextInput} textInput={textInput} />
        <TodoList todos={todoList} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} />
      </div>
    </>
  )
}

export default App
