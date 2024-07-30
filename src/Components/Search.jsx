import React, { useState } from 'react'

const Search = ({ search }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        search(text)
    }

    const clear = () => {
        setText('')
        search('')
    }

  return (
    <>
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form className="max-w-sm w-full" onSubmit={onSubmit}>
        <div className='flex items-center border-b-2 border-teal-500 py-2 input-container'>
            <input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type="text" placeholder='Search Image term...' value={text} onChange={(e) => setText(e.target.value)} />
            {text && <button className='clear-button flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded mr-2' onClick={clear}>Reset</button>}
            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
            Search
            </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Search
