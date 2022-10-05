import { useState } from "react";
import UserContext from "./userContext";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth();

const UserState = (props) => {




    const [user, setUser] = useState(auth.currentUser)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // const uid = user.uid;
            setUser(user)
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('logged out')
            setUser(null)
        }).catch((error) => {
            // An error happened.
        });
    }

    // const setCurrentUser = (user) => {
    //     setUser(user)
    // }
    // const logoutCurrentUser = () => {
    //     setUser(null)
    // }
    // existingUser()
    return (
        <UserContext.Provider value={{ user, logout }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;