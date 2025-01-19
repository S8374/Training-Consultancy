import { useContext } from "react"
import { AuthContext } from "../Provider/authProvider"

export const UseAuth = () => {
    const auth = useContext(AuthContext)
  return auth
}
