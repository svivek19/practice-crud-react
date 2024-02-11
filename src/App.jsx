import React, { useState } from 'react'

const App = () => {

  const [input, setinput] = useState('')
  const [value, setvalue] = useState([])
  const [edit, setedit] = useState(null)

  const add = (e) => {
    e.preventDefault()
    if (input.trim() !== '') {
      if (edit !== null) {
        const arr = [...value]
        arr[edit] = input;
        setvalue(arr)
        setedit(null)
      } else {
        setvalue([...value, input])
      }
      setinput('')
    } else {
      alert('pls enter value')
    }
  }

  const del = (id) => {
    const newArr = [...value]
    newArr.splice(id, 1)
    setvalue(newArr)

  }

  const rename = (id) => {
    setinput(value[id])
    setedit(id)
  }


  const dltall = () =>{
   setvalue([])
  }

  return (
    <div>
      <form>
        <input type="text" placeholder='enter text..' onChange={(e) => setinput(e.target.value)} value={input} />
        <button onClick={add}>add</button>
      </form>
      <br />
      {value.map((val, id) => {
        return (
          <div key={id}>
            <h4>{val}</h4>
            <button onClick={() => del(id)}>delete</button>
            <button onClick={() => rename(id)}>edit</button>
          </div>
        )
      })}
      <button onClick={dltall}>del all</button>
    </div>
  )
}

export default App
