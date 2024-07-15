import { createContext, useState } from "react";


const AuthContext = createContext()
export default AuthContext


export function AuthProvider({ children }) {
    const [response, setResponse] = useState(null)

    const updateResponse = (data) => {
        // console.log(data)
        if (data) {
            setResponse(data)
        }
    }
    return (
        <AuthContext.Provider value={{ response, updateResponse }}>
            {children}
        </AuthContext.Provider>
    )
}
