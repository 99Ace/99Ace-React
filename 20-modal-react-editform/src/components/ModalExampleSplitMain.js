// This splits Modal into a separate component
// Buttons are rendered in this component

// These are hooks and react-bootstraps import
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ModalExampleSplitModal from './ModalExampleSplitModal';

export default function ModalExampleSplitMain() {
    
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
        setShow(true);
    }
       
    // Modal control:
    const [show, setShow] = useState(false);
    
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
                            <Button
                                variant="success"
                                onClick={() => updateEdit(item)}>
                                edit
                            </Button>
                        </div>
                    )
                })
            }
            <hr />
            {/* Replace the original Modal with the modal component */}
            <ModalExampleSplitModal
                show={show} // pass show state to control the modal
                user={user} // pass the user being edited data to the modal 
                submitChange={submitChange} // pass the submitChange function to submit back the data
                setShow={setShow} // pass the setShow to close the function
            />
            
        </>
    )
}