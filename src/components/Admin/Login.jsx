import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
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
                                    {/* Email Field */}
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