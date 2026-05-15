import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        //This means:Whatever components are wrapped inside Provider will be rendered here.
        </UserContext.Provider>
    )
}

export default UserContextProvider