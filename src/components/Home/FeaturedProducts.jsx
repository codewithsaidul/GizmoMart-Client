import { products } from "../../data/Data";
import Button from "../Shared/Button";

const FeaturedProducts = () => {
  return (
    <div className="my-20">
      <h2 className="text-2xl font-bold text-slate-700 mb-10 text-center sm:text-left">
        Featured <span className="text-primary">Product</span>
      </h2>

      {/* ============== Featured Product Container ===================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.slice(0, 6).map((product) => (
          <div key={product.id} className="border border-primary p-6 rounded-lg">
            <div className="flex flex-col gap-5">
              <figure className="flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40 rounded-md"
                />
              </figure>
              <div className="flex flex-col space-y-3 mt-6">
                <h3 className="text-xl font-bold text-slate-700">
                  {product.title}
                </h3>
                <p className="text-base font-semibold">
                  Brand: <span>{product.brand}</span>
                </p>
                <p className="text-base font-semibold">
                  Category: <span>{product.category}</span>
                </p>
                <span className="text-xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </span>

                {/* Wishlist Button */}
                <Button title="Add to Wishlist"  stl={"bg-primary border-primary duration-1000 hover:bg-transparent hover:border-primary hover:text-primary hover:duration-1000"} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
