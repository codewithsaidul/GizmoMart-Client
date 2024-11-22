import { FaEdit } from "react-icons/fa";
import { products } from "../../data/Data";
import { MdDeleteForever } from "react-icons/md";


const MyProduct = () => {
  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="border border-primary p-6 rounded-lg min-h-60"
        >
          <div className="flex flex-col justify-between gap-5">
            <div>
              <figure className="flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-60 h-60 rounded-md"
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
              </div>
            </div>

            {/* Wishlist Button */}
            <div className="mt-4 flex items-center gap-2">
              <button className="flex items-center gap-1 justify-center py-2 px-4 bg-blue-600 text-white rounded-md text-2xl w-full">
                <FaEdit size={24} />
                <span>Edit</span>
              </button>
              <button className="flex items-center gap-1 justify-center py-2 px-4 bg-red-600 text-white rounded-md text-2xl w-full">
                <MdDeleteForever size={24} />
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MyProduct;
