// This is example of setting up a Modal inside same component

// These are hooks and react-bootstraps import
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function ModalExample() {
    // The following is using Hooks:UseState
    // It is the same as setting state
    // Dummy Data:
    const [data, setData] = useState([
        { id: 1, username: "Ace" },
        { id: 2, username: "Bravo" },
        { id: 3, username: "Charlie" },
    ]);
    // Tracker for user being edited : 
    const [user, setUser] = useState({ id: "", username: "" })

    // Update what user is being edited and set modal to show:
    const updateEdit = (item) => {
        setUser(item);
        setShow(true)
    }
    // For 2-way binding:
    const updateFormField = (e) => {
        setUser({
            ...user,
            username: e.target.value
        })
    }
    // Modal control:
    const [show, setShow] = useState(false);

    // Function to close the modal
    const handleClose = () => {
        // same as:
        // this.setState({ show : false})
        setShow(false);
    }

    // Function to make changes to the database
    const submitChange = () => {
        // you can replace line(38-44) to submit changes through API
        let index = data.findIndex(item => item.id === user.id);
        let clone = [
            ...data.slice(0, index),
            user,
            ...data.slice(index + 1)
        ]
        setData(clone);

        // reset the user being edit
        setUser({ id: "", username: "" })
        setShow(false)
    }
    return (
        <>
            <h1>Modal</h1>
            {
                data.map(item => {
                    return (
                        <div key={item.id}>
                            {item.username}
                            {/* set multiple buttons but all call the same Modal */}
                            <button
                                // when clicked, we pass the item to the updateEdit function to process
                                onClick={() => updateEdit(item)}>
                                edit
                            </button>
                        </div>
                    )
                })
            }
            <hr />

            {/* Modal : Pops up upon show */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Making Changes to Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        name="username"
                        placeholder='username'
                        value={user.username} // Bind to user data which we are tracking
                        onChange={updateFormField} // Bind to user data onChange
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button 
                        variant="primary" 
                        onClick={submitChange} // submit change through the function
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}