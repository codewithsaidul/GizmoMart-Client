import PropTypes from "prop-types";
import useUserData from "../../hooks/useUserData";
import Swal from "sweetalert2";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ products }) => {
  const userData = useUserData();
  const token = localStorage.getItem("access-token");


  // Handle Product Add to Cart
  const handleAddCart = async (id) => {
    const userRole = userData?.role;
    if (userRole === "admin" || userRole === "seller") {
      return Swal.fire({
        position: "top-center",
        icon: "warning",
        text: "Only buyers and customers can add products to their cart",
        showConfirmButton: true,
        timer: 3000,
      });
    }

    const userEmail = userData?.email;
    const productId = id;

    // Add product on cart
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/carts/add`,
        {
          userEmail: userEmail,
          productId: productId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.modifiedCount > 0) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Product Added to Cart Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Product Add to Cart Failed!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  // Handle Product Add to wishlist
  const handleAddWishList = async (id) => {
    const userRole = userData?.role;
    if (userRole === "admin" || userRole === "seller") {
      return Swal.fire({
        position: "top-center",
        icon: "warning",
        text: "Only buyers and customers can add products to their cart",
        showConfirmButton: true,
        timer: 3000,
      });
    }

    const userEmail = userData?.email;
    const productId = id;

    // Add product on wishlist
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/wishlist/add`,
        {
          userEmail: userEmail,
          productId: productId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.modifiedCount > 0) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Product Added to Wishlist Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Product Add to Cart Wishlist!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      {/* ============== Featured Product Container ===================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border border-primary p-6 rounded-lg min-h-60 relative"
          >
            <div className="absolute top-4 right-4">
              <span onClick={() => handleAddWishList(product._id)}>
                <FaRegHeart size={24} />
              </span>
            </div>
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
                  <div className="flex flex-col justify-between">
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
              <div className="justify-end mt-4">
                <button
                  onClick={() => handleAddCart(product._id)}
                  className={
                    "bg-primary border-primary duration-1000 hover:bg-transparent hover:border-primary hover:text-primary hover:duration-1000 btn w-full text-white"
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      productImage: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      productBrand: PropTypes.string.isRequired,
      productCategory: PropTypes.string.isRequired,
      productPrice: PropTypes.string.isRequired,
      productQuantity: PropTypes.number.isRequired,
    })
  ),
};

export default ProductCard;
