import React, { useState } from 'react'
import Table from './Table'

const Form = () => {

  const [userName, setUserName] = useState([])
  const [phone, setPhone] = useState([])
  const [data, setData] = useState([])


  const handleForm = (e) => {
    e.preventDefault()
    setData([...data, { username: userName, phone: phone }])
    setUserName([])
    setPhone([])
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <label htmlFor="name"></label>
        <input type="text" title='name' placeholder='Enter user name' value={userName} onChange={(e) => setUserName(e.target.value)} />
        <label htmlFor="number"></label>
        <input type="number" title='number' placeholder='Enter mobile number' value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button>Add</button>
      </form>
      <Table data={data} setData={setData}/>
    </div>
  )
}

export default Form
