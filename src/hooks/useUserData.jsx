import { useEffect, useState } from "react";
import UseAuth from "./useAuth";
import axios from "axios"



const useUserData = () => {

    const { user, loading} = UseAuth();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
           const res = await axios.get(`${import.meta.env.VITE_API_URL}/user/${user.email}`)
           setUserData(res.data)
        }


        if (user?.email && !loading) {
            fetchUserData();
        }
    }, [user, loading])



  return userData
}

export default useUserData