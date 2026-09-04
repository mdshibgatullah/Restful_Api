import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { apiUrl } from '../http'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        try{
            const res = await fetch(`${apiUrl}/admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'applicaton/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data),
            })
            const result = await res.json()
            if(result.status === 200){
                navigate('/')
            }else{
                console.log('Email or passwor is incorrect')
            }
        }catch{
            console.log('Something went errors')
        }
    }

    return (
        <div>
            <Container>
                <Row className='justify-content-center'>
                    <div className="col-md-6 mt-5">
                        <div className="card shadow">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="card-header bg-primary text-white">
                                    <h2>Admin login</h2>
                                </div>

                                <div className="card-body">
                                    
                                    <div className="mb-3">
                                        <label htmlFor="email" className='form-label'>Email</label>
                                        <input
                                            {...register('email', { required: 'Email is required' })}
                                            type="email" 
                                            
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            placeholder='enter email'
                                        />
                                        {errors.email && (
                                            <p className='invalid-feedback'>{errors.email.message}</p>
                                        )}
                                    </div>

                                    {/* Password Field */}
                                    <div className="mb-3">
                                        <label htmlFor="password" className='form-label'>Password</label>
                                        <input 
                                            {...register('password', { required: 'Password is required' })}
                                            type="password" 
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                                            placeholder='enter password'
                                        />
                                        {errors.password && (
                                            <p className='invalid-feedback'>{errors.password.message}</p>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <button type="submit" className='btn btn-success w-100'>Login</button>
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

export default Login