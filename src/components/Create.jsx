import React, { useState } from 'react'
import Header from './Header'
import { Button, Container, Form, Row } from 'react-bootstrap'

const Create = () => {

  const [formData, seFormData] = useState({
    title : '',
    description: '',
    image : ''
  })

  const handleChange = ()=>{
    seFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = ()=>{
    e.preventDefault();
    console.log(formData);
    alert('Form submitted')
  }


  const saveProduct = async ()=> {
    const res = await fetch(`http://127.0.0.1:8000/api/product/`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
        'Accept' : 'application/json'
      }
    }).then(res = res.json())
    .then(result=>{
      if(result.status === 200){
        alert("Product Created Successfully");
      }
    })

  }


  return (
    <div>
        <Header />


        <Container>
          <Row className='justify-content-center'>
            <div className="col-md-6 mt-5">
              <div className="card shadow">
                <form action="" onSubmit={handleSubmit}>
                  <div className="card-header bg-primary text-white">
                    <h2>Create Product</h2>
                  </div>

                  <div className="card-body">

                    <div className='mb-3'>
                      <label for="title" className='form-label'>Title</label>
                      <input onChange={handleChange} value={formData.title}
                       type="text" className='form-control' id='title' name='title' placeholder='enter title' required/>
                    </div>

                    <div className='mb-3'>
                      <label for="description" className='form-label'>Description</label>
                      <input onChange={handleChange} value={formData.description}
                       type="description" className='form-control' id='description' name='description' placeholder='enter description' required/>
                    </div>

                    <div className='mb-3'>
                      <label for="file" className='form-label'>File</label>
                      <input onChange={handleChange} value={formData.file}
                      type="file" className='form-control' id='file' name='file'/>
                    </div>

                    <button type='submit' className='btn btn-primary w-100' >Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </Row>
        </Container>

    </div>
  )
}

export default Create