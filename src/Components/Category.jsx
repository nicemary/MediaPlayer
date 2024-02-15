import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Category() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




  return (
    <>
    <div>
      <button className='btn btn-warning w-100' onClick={handleShow}>Add New  Category</button>
    </div>





    

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil text-warning me-3"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Please Fill The Folowing Details</p>
        <Form className='border border-secondary p-3'>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter  Category Id" />
                    </Form.Group>
                   
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Category Name Caption" />
                    </Form.Group>

                    
                    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>



    </>
  )
}
export default Category;