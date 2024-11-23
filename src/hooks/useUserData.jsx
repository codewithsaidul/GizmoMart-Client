import { useEffect, useState } from "react";
import UseAuth from "./useAuth";
import axios from "axios";

const useUserData = () => {
  const { user, loading } = UseAuth();
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem('access-token')

  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.email) {
        try {
          const res = await axios.get(
            `${import.meta.env.VITE_API_URL}/user/${user?.email}`, {
              headers: {
                authorization: `Bearer ${token}`,
              },
            }
          );
          setUserData(res.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    if (user?.email && !loading) {
      fetchUserData();
    }

    return () => {
      setUserData(null); // Optional: reset userData when the user changes
    };
  }, [user, token, loading]);

  return userData;
};

export default useUserData;
