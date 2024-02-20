import React from 'react'

const Table = ({ data,setData }) => {

    const handleDlt = (index) => {
        const arr = [...data]
        arr.splice(index, 1)
        setData(arr)
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>username</th>
                        <th>phone</th>
                        <th>option</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index + 1}>
                            <td>{index}</td>
                            <td>{item.username}</td>
                            <td>{item.phone}</td>
                            <td className='btn-group'>
                                <button className='edit'>edit</button>
                                <button className='delete' onClick={() => handleDlt(index)}>delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
