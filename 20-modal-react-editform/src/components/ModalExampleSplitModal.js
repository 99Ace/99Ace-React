import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function ModalExampleSplitModal(props) {
    // Pass the user to local form state 
    const [form, setForm] = useState({
        id: "",
        username: ""
    })
    // Local 2-way binding:
    const updateFormField = (e) => {
        setForm({
            ...form,
            username: e.target.value
        })
    }
    // Local handleClose: place here since closing of Modal is only used here
    const handleClose = () => {
        props.setShow(false);
    }

    // Works like ComponentDidMount:
    // load in the user into the form
    useEffect(() => {
        setForm(props.user);
    }, [props.user])

    return (
        <>
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Making Changes to Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        name="username"
                        placeholder='username'
                        value={form.username} // 2-way binding
                        onChange={updateFormField} // 2-way binding
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="secondary" 
                        onClick={handleClose}>
                        Close
                    </Button>
                    <Button 
                        variant="primary" 
                        onClick={() => props.submitChange(form)} // submit when clicked
                        >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal> 
        </>
    )
}