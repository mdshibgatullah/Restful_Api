import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from './Header'
import { Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const Edit = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  
  const fetchProduct = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/product/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const result = await res.json()

      if (result.status === 200) {
        setProduct(result.data)
        reset({
          title: result.data.title,
          description: result.data.description
        })
      } else {
        console.log('Data not found')
      }
    } catch (error) {
      console.log('Something went wrong:', error)
    }
  }

  
  const saveProduct = async (data) => {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.description)

    if (data.image && data.image[0]) {
      formData.append('image', data.image[0])
    }

    formData.append('_method', 'PUT')

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/product/${id}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      })

      const result = await res.json()

      if (result.status === 200) {
        navigate('/')
      } else {
        console.log('Update failed:', result)
      }
    } catch (error) {
      console.log('An error occurred:', error)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [id])

  return (
    <div>
      <Header />

      <Container>
        <Row className="justify-content-center">
          <div className="col-md-6 mt-5">
            <div className="card shadow">
              <form onSubmit={handleSubmit(saveProduct)}>
                <div className="card-header bg-primary text-white">
                  <h2>Edit Product</h2>
                </div>

                <div className="card-body">
                  
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label"> Title </label>
                    <input
                      {...register('title', {
                        required: 'Title field is required'
                      })}
                      type="text" className="form-control" id="title" placeholder="Enter title"
                    />
                    {errors.title && (
                      <span className="text-danger d-block mt-1"> {errors.title.message} </span> )}
                  </div>

                  
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">  Description </label>
                    <input
                      {...register('description', {
                        required: 'Description field is required'
                      })}
                      type="text" className="form-control" id="description" placeholder="Enter description"/>
                    {errors.description && (
                      <span className="text-danger d-block mt-1"> {errors.description.message} </span> )}
                  </div>

                 
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label d-block"> Image </label>

                    <input
                      {...register('image')}
                      type="file" className="form-control" id="image" />
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Update Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Edit