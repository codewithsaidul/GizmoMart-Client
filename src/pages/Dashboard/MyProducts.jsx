import { useQuery } from "@tanstack/react-query";
import MyProduct from "../../components/Dashboard/MyProduct";
import axios from "axios";
// import useUserData from "../../hooks/useUserData"
import Loading from "../../components/Shared/Loading";
import UseAuth from "../../hooks/useAuth";

const MyProducts = () => {
  const { user } = UseAuth();
  const sellerEmail = user?.email;

  // Fetching The Product Data With Seller Email
  const {
    refetch,
    data: products = [],
    isLoading,
  } = useQuery({
    queryKey: ["products", "sellerEmail"],
    queryFn: async () => {
      if (!sellerEmail) return [];
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/products/${sellerEmail}`
      );
      return data;
    },
  });

  console.log(sellerEmail);
  console.log(products);

  // Get products data length
  const productCount = products.length;

  //   Showing Loading Screen if Data Loading
  if (isLoading) return <Loading />;

  return (
    <div className="mt-6">
      <h2 className="text-2xl text-center text-primary font-bold mb-7">
        My Products
      </h2>

      {/* ====================== Products Container ======================== */}
      {productCount > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product 1 */}
          <MyProduct products={products} refetch={refetch} />
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[calc(100vh-100px)]">
          <h2 className="text-3xl text-primary font-bold">
            Product Not Found!
          </h2>
        </div>
      )}
    </div>
  );
};

export default MyProducts;
