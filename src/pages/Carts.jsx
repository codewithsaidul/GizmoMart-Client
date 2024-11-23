import { useQuery } from "@tanstack/react-query";
import useUserData from "../hooks/useUserData";
import axios from "axios";
import Cart from "../components/carts/Cart";
import Loading from "../components/Shared/Loading";

const Carts = () => {
  const userData = useUserData();

  const {
    refetch,
    data: carts = [],
    isLoading,
  } = useQuery({
    queryKey: ["carts", userData?.email],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/carts/${userData?.email}`
      );
      return data;
    }, // 10 seconds
  });

  if (isLoading) return <Loading />;

  return (
    <div className="mt-5">
      <h2 className="text-2xl text-primary font-bold text-center mb-10">
        My Carts
      </h2>

      {carts.length === 0 ? (
        <div className="flex justify-center items-center min-h-[calc(100vh-100px)] text-center">
          <p className="text-2xl text-black font-semibold">
            Your Cart is Empty
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6">
          {carts.map((product) => (
            <Cart key={product._id} product={product} refetch={refetch} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carts;
