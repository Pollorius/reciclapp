import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default function SearchBar () {
  return (
    <Form className='d-flex flex-sm-row justify-content-center'>
      <FormControl type='text' placeholder='Buscar comercio...' className='mr-sm-2' />
      <Button variant='outline-success'>Search</Button>
    </Form>
  )
}
