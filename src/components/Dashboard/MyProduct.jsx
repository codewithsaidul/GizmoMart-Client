import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";
import ProductDeleteModal from "./ProductDeleteModal";
import { useState } from "react";

const MyProduct = ({ products, refetch }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {products.map((product) => (
        <div
          key={product._id}
          className="border border-primary p-6 rounded-lg min-h-60 relative"
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
                    ${parseFloat(product.productPrice)}
                  </span>
                  <span className="text-xl font-bold text-primary">
                    In Stock: {product.productQuantity}
                  </span>
                </div>
              </div>
            </div>

            {/* Wishlist Button */}
            <div className="mt-4 flex items-center gap-2">
              <button className="flex items-center gap-1 justify-center py-2 px-4 bg-blue-600 text-white rounded-md text-xl w-full">
                <FaEdit size={20} />
                <span>Edit</span>
              </button>
              <button
                onClick={() => setShowModal(!showModal)}
                className="flex items-center gap-1 justify-center py-2 px-4 bg-red-600 text-white rounded-md text-xl w-full"
              >
                <MdDeleteForever size={20} />
                <span>Delete</span>
              </button>

              {/*  ================ Open Modal for Deletation ============== */}
              {showModal && (
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.5)] py-6 px-10 w-[90%] rounded-lg">
                  <ProductDeleteModal
                    setShowModal={setShowModal}
                    refetch={refetch}
                    userId={product._id}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

MyProduct.propTypes = {
  products: PropTypes.array.isRequired, // Product array from the GraphQL API
  refetch: PropTypes.func.isRequired,
};

export default MyProduct;
