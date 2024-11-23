import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../Shared/Loading";
import FeaturedProduct from "./FeaturedProduct";

const FeaturedProducts = () => {

  const { data: products = [], isLoading} = useQuery({
    queryKey: "products",
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
      return data.products;
    }
  })

  // Showing Loading Screen If Data Not Found
  if(isLoading) return <Loading />

  return (
    <div className="my-20">
      <h2 className="text-2xl font-bold text-slate-700 mb-10 text-center sm:text-left">
        Featured <span className="text-primary">Product</span>
      </h2>

      {/* ============== Featured Product Container ===================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          products.slice(0, 6).map(product => <FeaturedProduct key={product._id} product={product} />)
        }
      </div>
    </div>
  );
};

export default FeaturedProducts;
