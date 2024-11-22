import { useQuery } from "@tanstack/react-query";

import Button from "../Shared/Button";
import axios from "axios";
import Loading from "../Shared/Loading";

const ProductData = () => {

  // const maxLength = 18;
  const { data: products = [], isLoading} = useQuery({
    queryKey: "products",
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
      return data;
    }
  })

  // Showing Loading Screen if data not found
  if (isLoading) return <Loading />

  return (
    <div >
      {/* ============== Featured Product Container ===================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 6).map((product) => (
          <div
            key={product.id}
            className="border border-primary p-6 rounded-lg min-h-60"
          >
            <div className="flex flex-col justify-between gap-5">
              <div>
                <figure className="flex justify-center">
                  <img
                    src={product.productImage}
                    alt={product.productName}
                    className="w-40 h-40 rounded-md"
                  />
                </figure>
                <div className="flex flex-col space-y-3 mt-6">
                  <h3 className="text-xl font-bold text-slate-700">
                    {product.productName}
                  </h3>
                  <p className="text-base font-semibold">
                    Brand: <span>{product.productBrand}</span>
                  </p>
                  <p className="text-base font-semibold">
                    Category: <span>{product.productCategory}</span>
                  </p>
                  <span className="text-xl font-bold text-primary">
                    ${product.productPrice}
                  </span>
                </div>
              </div>

              {/* Wishlist Button */}
              <div className="justify-end mt-4">
                <Button
                  title="Add to Cart"
                  stl={
                    "bg-primary border-primary duration-1000 hover:bg-transparent hover:border-primary hover:text-primary hover:duration-1000 w-full"
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductData;
