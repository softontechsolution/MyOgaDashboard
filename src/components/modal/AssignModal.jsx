import "./assignModal.scss";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AssignModal(props) {
    const [dID, setDid] = useState(props.Id);
    const [dValue, setDvalue] = useState(props.value);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <div className="verifyButton" onClick={handleShow}>
                Verify Driver
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Verify Driver</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="verifyForm">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Verification Value</Form.Label>
                            <Form.Control type="text" placeholder="Enter 1 or 0" value={dValue}
                                onChange={(e) => { setDvalue(e.target.value) }}
                            />
                            <Form.Text className="text-muted">
                                Enter 1 for verify and 0 for not verified.
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <button className="primaryBtn" form="verifyForm" type="submit">Verify</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AssignModal