/* eslint-disable react/prop-types */
import TodoItem from "../TodoItem/TodoItem"

function TodoList({ todos, handleDeleteTodo, handleCompleteTodo }) {
  if (todos.length === 0) return null

  return (
    <ul id='todosContainer' className='flex flex-col space-y-2 bg-zinc-950 rounded-lg p-4 min-h-96 mb-20'>
      {todos.map(({ id, name, isCompleted }) => (
        <TodoItem
          key={id}
          id={id}
          name={name}
          isCompleted={isCompleted}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList