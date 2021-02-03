import React, { useState, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {
    // will use the useState() hook to define a variable that holds the state of the component, and a function that updates it
    const [users, setUsers] = useState([])

    const getUsers = () => { //creating a function that fetches our users' api
        return fetch("http://localhost:8088/users")
        .then(res => res.json()) // and changes it to json file
        .then(setUsers) //updates our state
    }

    return (
        <UserContext.Provider value={{ //we will return the functions we created above through usersContext. The other components(children) can access the array of objects we stored in users and invoke the functions we created above
            users, getUsers
        }}>
            {props.children}
        </UserContext.Provider>
    )
}