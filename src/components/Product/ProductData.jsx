import { products } from "../../data/Data";
import Button from "../Shared/Button";

const ProductData = () => {

  const maxLength = 18;

  return (
    <div >
      {/* ============== Featured Product Container ===================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 6).map((product) => (
          <div
            key={product.id}
            className="border border-primary p-6 rounded-lg min-h-60"
          >
            <div className="flex flex-col justify-between gap-5 h-fit">
              <div>
                <figure className="flex justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-28 h-28 rounded-md"
                  />
                </figure>
                <div className="flex flex-col space-y-3 mt-6">
                  <h3 className="text-lg font-bold text-slate-700">
                    {
                      product.title.length > maxLength ? (
                        product.title.slice(0, maxLength) + "..."
                      ) : (
                        product.title
                      )
                    }
                    
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
                </div>
              </div>

              {/* Wishlist Button */}
              <div className="w-full mt-4">
                <Button
                  title="Add to Wishlist"
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
