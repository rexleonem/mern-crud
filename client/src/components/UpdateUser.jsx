import React from 'react'

export default function UpdateUser() {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
       <div className="w500 bg-white rounded p-3">
            <h1>Update User</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="number" className="form-control" id="age" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>  
    </div>
  )
}
