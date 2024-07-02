/* eslint-disable react/prop-types */
import { IoAdd } from 'react-icons/io5';

function Form({ handleAddTodo, setTextInput, textInput }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddTodo(textInput)
    setTextInput('')
    document.querySelector('#inputValue').value = ''
  }

  return (
    <form onSubmit={handleSubmit} className='flex justify-between mb-4'>
      <input type="text"
        id='inputValue'
        className='bg-zinc-950 text-zinc-200 caret-violet-700 rounded-lg pl-4 text-lg outline-none'
        onChange={(e) => setTextInput(e.target.value)}
      />
      <button type='submit' className='bg-violet-700 text-zinc-950 rounded-lg text-4xl flex justify-center items-center hover:bg-violet-900' >
        <IoAdd />
      </button>
    </form>
  )
}

export default Form