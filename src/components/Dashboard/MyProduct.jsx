import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";

const MyProduct = ( { products }) => {

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
                  src={product.productImage}
                  alt={product.productName}
                  className="w-60 h-60 rounded-md"
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
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">
                    ${product.productPrice}
                  </span>
                  <span className="text-xl font-bold text-primary">
                    In Stock: {product.productQuantity}
                  </span>
                </div>
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


MyProduct.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default MyProduct;
