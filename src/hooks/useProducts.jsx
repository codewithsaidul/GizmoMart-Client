import { useQuery } from "@tanstack/react-query"
import useUserData from "./useUserData"


const useProducts = () => {

    const userData = useUserData()
    const token = localStorage.getItem('access_token')


    const { refetch, data: products = [] } = useQuery()

  return (
    <div>useProducts</div>
  )
}

export default useProducts