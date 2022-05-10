import React, { useState } from 'react'

export default function Register() {
    const [username, setUsername] = useState("Ace")
    const [regForm, setRegForm] = useState(
        {
            "username2": "John",
        }
    )
    console.log(regForm);
    const updateFormField = (e) => {
        
        setRegForm(
            {
                ...regForm,
                [e.target.name]: e.target.value
            }
        )
    }
    return <React.Fragment>
        <h1>Register</h1>
        
        <form>
            <input name='username' value={username}
                onChange={(e) => {
                    setUsername(e.target.value)
                }} />

            <input name='username2' value={regForm.username2}
                onChange={updateFormField} />

            <input name='password' value={regForm.password}
            onChange={updateFormField} />

            <button  >Register</button>
        </form>
    </React.Fragment>
}

// export default class Register extends React.Component {
//     state = {
//         "username" : "",
//         "password" : ""
//     }
//     updateFormField=(e)=> {
//         this.setState({
//             [e.target.name]:e.target.value
//         })
//     }
// }