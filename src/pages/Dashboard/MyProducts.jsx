import { useQuery } from "@tanstack/react-query"
import MyProduct from "../../components/Dashboard/MyProduct"
import axios from "axios"
// import useUserData from "../../hooks/useUserData"
import Loading from "../../components/Shared/Loading"
import UseAuth from "../../hooks/useAuth"


const MyProducts = () => {
    const { user } = UseAuth()
    const sellerEmail = user?.email

    // Fetching The Product Data With Seller Email
    const { refetch, data: products = [], isLoading} = useQuery({
        queryKey: ["products", "sellerEmail"],
        queryFn: async () => {
            if (!sellerEmail) return [];
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products/${sellerEmail}`);
            return data
        },
    })

    //   Showing Loading Screen if Data Loading
    if(isLoading) return <Loading />

  return (
    <div className="mt-6">
        <h2 className="text-2xl text-center text-primary font-bold mb-7">My Products</h2>


        {/* ====================== Products Container ======================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product 1 */}
            <MyProduct products={products} />
        </div>
    </div>
  )
}

export default MyProducts