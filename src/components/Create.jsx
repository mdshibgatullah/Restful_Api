import React from 'react'
import Header from './Header'
import { Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate()

const {
  register,
  handleSubmit,
  formState: {errors}
} = useForm()


  const saveProduct = async (data)=> {
    const res = await fetch(`http://127.0.0.1:8000/api/product/`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json(data))
    .then(result=>{
      if(result.status === 200){
        navigate('/');
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
                <form action="" onSubmit={handleSubmit(saveProduct)}>
                  <div className="card-header bg-primary text-white">
                    <h2>Create Product</h2>
                  </div>

                  <div className="card-body">

                    <div className='mb-3'>
                      <label for="title" className='form-label'>Title</label>
                      <input 
                      {
                        ...register('title', 
                          {required: 'Title field is required'}
                        )
                      }
                       type="text" className='form-control' id='title' name='title' placeholder='enter title' required/>
                    </div>

                    <div className='mb-3'>
                      <label for="description" className='form-label'>Description</label>
                      <input 
                      
                        {
                        ...register('description', 
                          {required: 'Description field is required'}
                         )
                        }
                       type="description" className='form-control' id='description' name='description' placeholder='enter description' required/>
                    </div>

                    <div className='mb-3'>
                      <label for="file" className='form-label'>File</label>
                      <input 
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