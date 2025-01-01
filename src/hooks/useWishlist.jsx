import { useQuery } from "@tanstack/react-query";
import useUserData from "./useUserData";
import axios from "axios";


const useWishlist = () => {

    const userData = useUserData();
    const token = localStorage.getItem('access-token')

    const {
        refetch,
        data: wishlists = [],
        isLoading,
      } = useQuery({
        queryKey: ["carts", useUserData?.email],
        queryFn: async () => {
          const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/wishlists/${userData?.email}`, {
              headers: {
                authorization: `Bearer ${token}`,
              },
            }
          );
          return data;
        }, // 10 seconds
      });

  return [ wishlists, refetch, isLoading ];
}

export default useWishlist