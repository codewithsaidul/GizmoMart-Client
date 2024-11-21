import { useContext } from "react"
import { AuthContext } from "../constext/AuthProvider"


const UseAuth = () => {

    const Auth = useContext(AuthContext)

  return Auth
}

export default UseAuth