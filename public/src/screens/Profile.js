import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

export default function Profile() {
    let history = useHistory()
    const resetPasswordHandler = () =>{
         history.push("/resetpassword")
    }
    return (
        <div style={{float:"right"}}>
            <Button variant="danger" onClick={()=>{resetPasswordHandler()}}>Change Password</Button>
        </div>
    )
}
