import React, { useEffect, useState } from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Product = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  
  const fetchProducts = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/product`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })

      const result = await res.json()

      if (result.status === 200) {
        setProducts(result.data)
      } else {
        console.log('Server Error:', result)
      }
    } catch (error) {
      console.error('Fetch Error:', error)
    }
  }

  
  const deleteProduct = async (id) => {
    if (window.confirm('Are you sure to delete?')) {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/product/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })

        const result = await res.json()

        if (res.ok && result.status === 200) {
          setProducts(products.filter(product => product.id !== id))
          console.log('Deleted successfully')
        } else {
          console.log('Delete failed:', result)
        }
      } catch (error) {
        console.error('Delete Error:', error)
      }
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <section className='my-4'>
      <Container>
        <Row>
          <button className='btn btn-primary mb-2' onClick={() => navigate('/create')}>
            Product Create
          </button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>
                    {product.image && (
                      <img 
                        src={`http://127.0.0.1:8000/uploads/products/${product.image}`} 
                        width={70} 
                        alt={product.title} 
                      />
                    )}
                  </td>
                  <td>{product.description}</td>
                  <td>
                    <button className='btn btn-primary btn-sm me-2' onClick={() => navigate(`/edit/${product.id}`)}>
                      Edit
                    </button>
                    <button className='btn btn-danger btn-sm' onClick={() => deleteProduct(product.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </section>
  )
}

export default Product