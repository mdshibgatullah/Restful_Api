import React, { useEffect } from 'react'
import Header from '../Header'
import { Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const Create = () => {
    const {register, handleSubmit, formState:{errors}} = useForm()

    const saveProduct = async (data)=>{
        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('description', data.description)

        if(data.image && data.image[0]){
            formData.append('image', data.image[0])
        }

        try{
            const res = await fetch(`http://127.0.0.1:8000/api/product`, {
                method: 'POST',
                headers:{
                    'Accept' : 'application/json'
                },
                body: formData
            })
            const result = await res.json()
            if(result.status === 200){
                console.log(result.data)
            }
        }catch{
            console.log('something went error')
        }
    }



  return (
    <div>
        <Header />

        <Container>
            <Row className='justify-content-center'>
                <div className="col-md-6 mt-4">
                    <div className="card shadow">
                        <form action="" onSubmit={handleSubmit(saveProduct)}>
                            <div className='card-header text-white bg-primary'>
                                <h2>Product Create</h2>
                            </div>

                            <div className='card-body'>
                                <div className="mb-3">
                                    <label htmlFor="title" className='form-label'>Title</label>
                                    <input
                                    {...register('title', {required: 'Title feild is requied'})}
                                     type="text" name='title' className='form-control' placeholder='Title Field'/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className='form-label'>Description</label>
                                    <input
                                    {...register('description', {required: 'Description feild is requied'})}
                                    type="text" name='description' className='form-control' placeholder='Description Field'/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="image" className='form-label'>Title</label>
                                    <input 
                                    {...register('image', {required: 'Description feild is requied'})}
                                    type="file" name='image' id='image' className='form-control'/>
                                </div>

                                <div className="mb-3">
                                    <button type='submit' className='btn btn-success w-100'>Submit</button>
                                </div>
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