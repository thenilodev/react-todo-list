/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa6";

function TodoItem({ id, name, isCompleted, handleDeleteTodo, handleCompleteTodo }) {
  return (
    <div>
      <li key={id} className='bg-zinc-900 text-zinc-200 p-4 rounded-lg flex items-center hover:scale-105 hover:ring-1 hover:ring-violet-700 transition-transform'>
        <input
          onClick={() => handleCompleteTodo(id)}
          type="checkbox"
          checked={isCompleted}
          className='mr-2 cursor-pointer appearance-none border-zinc-700 opacity-30 border-2 p-2 rounded-lg checked:bg-violet-700 checked:border-violet-700 checked:opacity-100 hover:border-violet-700' />
        <p className={isCompleted ? 'line-through opacity-30' : ''}>{name}</p>
        <FaTrash
          onClick={() => handleDeleteTodo(id)}
          className='text-zinc-700 flex ml-auto hover:text-red-600 cursor-pointer hover:scale-125 transition-transform ' />
      </li>
    </div>
  )
}

export default TodoItem