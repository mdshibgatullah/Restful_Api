import React from 'react'
import Header from './Header'
import { Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { apiUrl } from './http'

const Create = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const saveProduct = async (data) => {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.description)
    

    if (data.image && data.image[0]) {
      formData.append('image', data.image[0])
    }

    try {
      const res = await fetch(`${apiUrl}/product`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json' 
        },
        body: formData
      })
      
      const result = await res.json()

      if (result.status === 200) {
        navigate('/')
      } else {
        console.log('Server Error / Validation Errors:', result)
      }
    } catch (error) {
      console.error('Fetch Error:', error)
    }
  }

  return (
    <div>
      <Header />

      <Container>
        <Row className='justify-content-center'>
          <div className="col-md-6 mt-5">
            <div className="card shadow">
              <form onSubmit={handleSubmit(saveProduct)}>
                <div className="card-header bg-primary text-white">
                  <h2>Create Product</h2>
                </div>

                <div className="card-body">
                  <div className='mb-3'>
                    <label htmlFor="title" className='form-label'>Title</label>
                    <input 
                      {...register('title', { required: 'Title field is required' })}
                      type="text" className='form-control' id='title' placeholder='enter title'
                    />
                    {errors.title && <span className="text-danger d-block mt-1">{errors.title.message}</span>}
                  </div>

                  <div className='mb-3'>
                    <label htmlFor="description" className='form-label'>Description</label>
                    <input 
                      {...register('description', { required: 'Description field is required' })}
                      type="text" 
                      className='form-control' 
                      id='description' 
                      placeholder='enter description'
                    />
                    {errors.description && <span className="text-danger d-block mt-1">{errors.description.message}</span>}
                  </div>

                  <div className='mb-3'>
                    <label htmlFor="image" className='form-label'>Image</label>
                   
                    <input 
                      {...register('image')}
                      type="file" 
                      className='form-control' 
                      id='image' 
                    />
                  </div>

                  <button type='submit' className='btn btn-primary w-100'>Submit</button>
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