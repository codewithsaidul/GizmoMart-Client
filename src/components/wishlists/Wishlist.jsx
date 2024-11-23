import PropTypes from "prop-types";
import useUserData from "../../hooks/useUserData";
import axios from "axios";
import Swal from "sweetalert2";

const Wishlist = ({ product, refetch }) => {
  const userData = useUserData();
  const token = localStorage.getItem('access-token')


  const handleRemoveWishlistData = async (id) => {
    // refetch(); // Refetch the data to remove the removed product from the cart
    const productId = id;
    const userEmail = userData.email;
    // Implement your backend logic to remove the product from the cart
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/wishlist/remove`,
        {
          userEmail: userEmail,
          productId: productId,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Product Remove from Wishlist!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: err.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="border border-primary p-6 rounded-lg min-h-60">
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
        <div className="justify-end mt-4">
          <button
            onClick={() => handleRemoveWishlistData(product._id)}
            className={
              "bg-primary border-primary duration-1000 hover:bg-transparent hover:border-primary hover:text-primary hover:duration-1000 btn w-full text-white"
            }
          >
            Remove From Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

Wishlist.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    productImage: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productBrand: PropTypes.string.isRequired,
    productCategory: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
    productQuantity: PropTypes.number.isRequired,
  }).isRequired,
  refetch: PropTypes.func.isRequired,
};

export default Wishlist;
