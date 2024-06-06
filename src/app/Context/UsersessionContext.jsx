"use client"

import {createContext , useEffect , useState} from "react";

export const UserSessionContext = createContext(null);

export default function UserSessionContextProvider({children}){

    const [userId , setUserId] = useState(null);
    const [sessionClaims , setSessionClaims] = useState(null);
    const apiUrl = "http://localhost:3000"

                
        useEffect(() => {

            fetch(`${apiUrl}/api/v1/getAuth` , {
                mode: "no-cors"
            })
            .then(async (res) => {
                console.log()
                const response = await res.json();
                setUserId(response.userId);
                setSessionClaims(response.sessionClaims);
            })

        } , [])

    return(
        <UserSessionContext.Provider value={{userId , sessionClaims}}>
            {children}
        </UserSessionContext.Provider>
    )
}