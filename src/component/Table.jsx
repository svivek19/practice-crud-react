import React from 'react'

const Table = ({ data }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>username</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index + 1}>
                            <td>{index}</td>
                            <td>{item.username}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
