import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
// import { Form } from 'react-router-dom';
import Form from 'react-bootstrap/Form';


function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (


        <>
            <div className='d-flex align-item-center '>
                <h5>Uplod New Vedio</h5>
                <i class="fa-solid fa-cloud-arrow-up ms-3 mt-2 " style={{ color: "white" }} onClick={handleShow}></i>
            </div>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: "23px" }}>
                        < i class="fa-solid fa-film text-warning me-3 "></i>
                        Upload Vedio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please Fill The Folowing Details</p>
                     <Form className='border border-secondary p-3'>
                    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter Vedio Id" />
                        </Form.Group>
                       
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter Vedio Caption" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter Vedio Image Url" />
                        </Form.Group>

                        
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter Youtube Vedio Link" />
                        </Form.Group>
                        </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" className='btn btn-warning'>Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Add;
