import PropTypes from "prop-types";
import axios from "axios";
import Swal from "sweetalert2";

const ProductDeleteModal = ({ setShowModal, refetch, userId }) => {
  const token = localStorage.getItem("access-token");

  const handleDelete = async (userId) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/products/${userId}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.deletedCount > 0) {
        setShowModal(false);
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Product Deleted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      setShowModal(false);
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
    <div>
      <div>
        <h3>Are Your Sure?</h3>
        <p>You won&apos;t be able to revert this!</p>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={() => setShowModal(false)}
          className="bg-slate-400 hover:bg-slate-400 text-white btn text-xl"
        >
          Cancel
        </button>
        <button
          onClick={() => handleDelete(userId)}
          className="bg-red-600 hover:bg-red-600 text-white btn text-xl"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

ProductDeleteModal.propTypes = {
  setShowModal: PropTypes.func,
  refetch: PropTypes.func,
  userId: PropTypes.string,
};

export default ProductDeleteModal;
