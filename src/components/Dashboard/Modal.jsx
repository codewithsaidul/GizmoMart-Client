import axios from "axios";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Modal = ({ user, setModalVisible, refetch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const token = localStorage.getItem('access-token')

  const handleUpdate = async (data) => {
    const role = data.role;
    const status = data.status;
    const updatedUser = { ...user, role, status };
    try {
      setModalVisible(false);
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/userUpdate/${user._id}`,
        updatedUser,
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
          title: "Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: error.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="modalStatus mt-20">
      <div className="modal__content">
        <button className="modalClose" onClick={() => setModalVisible(false)}>
          &times;
        </button>
        <form onSubmit={handleSubmit(handleUpdate)} className="mt-5">
          <div className="flex items-center gap-2 w-full">
            <div className="w-full">
              <h2 className="mb-2">Role</h2>
              <select
                className="select select-bordered w-full"
                {...register("role")}
              >
                <option value={user?.role === "buyer" ? "buyer" : "seller"}>
                  {user?.role === "buyer" ? "buyer" : "seller"}
                </option>
                <option value={user?.role === "buyer" ? "seller" : "buyer"}>
                  {user?.role === "buyer" ? "seller" : "buyer"}
                </option>
              </select>
            </div>

            <div className="w-full">
              <h2 className="mb-2">Status</h2>
              <select
                className="select select-bordered w-full"
                {...register("status", { required: true })}
              >
                <option value={user?.role === "buyer" ? "Approved" : "Pending"}>
                  {user?.role === "buyer" ? "Approved" : "Pending"}
                </option>
                <option
                  value={user?.role === "seller" ? "Approved" : "Pending"}
                >
                  {user?.role === "seller" ? "Approved" : "Pending"}
                </option>
              </select>
              {errors.status && (
                <p className="text-sm my-2 font-bold text-red-700">
                  {"Status is required"}
                </p>
              )}
            </div>
          </div>

          <button className="py-2 px-4 bg-primary text-white rounded-lg mt-3">
            Update Data
          </button>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  setModalVisible: PropTypes.func,
  user: PropTypes.object,
  refetch: PropTypes.func,
};

export default Modal;
