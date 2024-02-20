import React, { useState } from 'react'
import Table from './Table'

const Form = () => {

  const [userName, setUserName] = useState([])
  const [phone, setPhone] = useState([])
  const [data, setData] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const handleForm = (e) => {
    e.preventDefault()
    if (editIndex !== null) {
      const newData = [...data]
      newData[editIndex] = { username: userName, phone: phone }
      setData(newData)
      setEditIndex(null)
    } else {
      setData([...data, { username: userName, phone: phone }])
    }
    setUserName([])
    setPhone([])
  }

  const handleEdit = (index) => {
    setEditIndex(index)
    setUserName(data[index].username)
    setPhone(data[index].phone)
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <label htmlFor="name"></label>
        <input type="text" title='name' placeholder='Enter user name' required value={userName} onChange={(e) => setUserName(e.target.value)} />
        <label htmlFor="number"></label>
        <input type="number" title='number' placeholder='Enter mobile number' required value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button>Add</button>
      </form>
      <Table data={data} setData={setData} handleEdit={handleEdit} />
    </div>
  )
}

export default Form
