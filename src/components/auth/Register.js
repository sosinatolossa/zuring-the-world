import React, { useRef } from "react"
import { useHistory } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const firstName = useRef()
    const lastName = useRef()
    const gender = useRef()
    const email = useRef()
    const conflictDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => { //check your api for logout button, like customers in here.. do you want that in here??
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            gender: gender.current.value,
                            email: email.current.value,
                            firstName: firstName.current.value,
                            lastName: lastName.current.value
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("ZuringTheWorld_user", createdUser.id)
                                history.push("/travelNotes")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })
        
    }

    return (
        <section style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <section>
                <form className="form--register" onSubmit={handleRegister}>
                    <h2 className="h3 mb-3 font-weight-normal">Please Register for Zurīng the World</h2>
                    <fieldset>
                        <label htmlFor="firstName"> First Name </label>
                        <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="lastName"> Last Name </label>
                        <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="gender"> Gender </label>
                        <select ref={gender} name="gender" id="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                    </fieldset>
                    <fieldset>
                        <button className="sign-in" type="submit"> Sign in </button>
                    </fieldset>
                </form>
            </section>
        </section>
    )
}

