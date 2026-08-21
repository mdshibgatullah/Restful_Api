import React from 'react'
import Header from './Header'
import { Button, Container, Form } from 'react-bootstrap'

const Create = () => {
  return (
    <div>
        <Header />

<Form>
  <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter your email" />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter your password" />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Gender</Form.Label>
    <Form.Select>
      <option>Select Gender</option>
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </Form.Select>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Write your message" />
  </Form.Group>

  <Form.Check
    type="checkbox"
    label="I agree to the terms and conditions"
    className="mb-3"
  />

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

    </div>
  )
}

export default Create