import React, { useEffect, useState } from 'react'
import { Container, Row, Table } from 'react-bootstrap'

const Product = () => {
    const [products, setProducts] = useState([])

    const fectProducts = async ()=>{
        const res = await fetch(`http://127.0.0.1:8000/api/product/`, {
            method: 'GET',
            headers: {
                'content-type' : 'application/json',
                'Accept' : 'application/json'
            }
        }).then(res => res.json())
        .then(result => {
            if(result.status === 200){
                setProducts(result.data)
            }else{
                console.log('Something went wrong')
            }
        })
    }


    const deleteProduct = async (id)=>{
        if(confirm('Are you sure to delete?')){
            const res = await fetch(`http://127.0.0.1:8000/api/product/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type' : 'application/json',
                }
            }).then(res => res.json())
            .then(result => {
                if(result.status === 200){
                    setProducts(products.filter(
                        product => product.id !== id
                    ))
                    console.log('Delete successfully')
                }
            })
        }
    }



    useEffect(()=> {
        fectProducts()
    }, [])

  return (
    <section>
      <Container>
        <Row>
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
                {
                    products.map((product)=> (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td><img src={`http://127.0.0.1:8000/uploads/products/${product.image}`} width={70} alt="" /></td>
                        <td>{product.description}</td>
                        <td>
                            <button className='btn btn-primary btn-sm me-2 '>Edit</button>
                            <button className='btn btn-danger btn-sm' onClick={() => deleteProduct(product.id)}>Delete</button>
                        </td>
                    </tr>
                    ))
                     
                }
               
            </tbody>
          </Table>
        </Row>
      </Container>
    </section>
  )
}

export default Product