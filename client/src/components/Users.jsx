import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Users() {
    const [users, setUsers] = useState([{
        name: 'John',
        email: 'john',
        age: 20,
        id: 1
    }])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className="w500 bg-white rounded p-3">
            <Link to='/create' className='btn btn-primary'>Create User</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                    {/* <Link to={`/update/${user.id}`} className='btn btn-primary'>Update</Link> */}
                                        <Link to='/update' className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
