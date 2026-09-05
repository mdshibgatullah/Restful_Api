import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { apiUrl } from '../http';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const userRegister = async (data) => {
        try {
            const res = await fetch(`${apiUrl}register`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (result.status === 200) {
                navigate('/');
            }

            console.log(result);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <div className="col-md-6 mt-5">
                        <div className="card shadow">

                            <form onSubmit={handleSubmit(userRegister)}>

                                <div className="card-header bg-primary text-white">
                                    <h2>User Registration</h2>
                                </div>

                                <div className="card-body">

                                    {/* Name */}
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">
                                            Name
                                        </label>

                                        <input
                                            {...register('name', {
                                                required: 'Name is required'
                                            })}
                                            type="text"
                                            className={`form-control ${
                                                errors.name ? 'is-invalid' : ''
                                            }`}
                                            placeholder="Enter name"
                                        />

                                        {errors.name && (
                                            <p className="invalid-feedback">
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Email
                                        </label>

                                        <input
                                            {...register('email', {
                                                required: 'Email is required'
                                            })}
                                            type="email"
                                            className={`form-control ${
                                                errors.email ? 'is-invalid' : ''
                                            }`}
                                            placeholder="Enter email"
                                        />

                                        {errors.email && (
                                            <p className="invalid-feedback">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Password */}
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>

                                        <input
                                            {...register('password', {
                                                required: 'Password is required',
                                                minLength: {
                                                    value: 8,
                                                    message: 'Password must be at least 8 characters'
                                                }
                                            })}
                                            type="password"
                                            className={`form-control ${
                                                errors.password ? 'is-invalid' : ''
                                            }`}
                                            placeholder="Enter password"
                                        />

                                        {errors.password && (
                                            <p className="invalid-feedback">
                                                {errors.password.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <button
                                            type="submit"
                                            className="btn btn-success w-100"
                                        >
                                            Register
                                        </button>
                                    </div>

                                </div>
                            </form>

                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Register;
