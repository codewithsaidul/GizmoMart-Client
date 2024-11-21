import { FcGoogle } from "react-icons/fc";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { setUser, LoginWithGoogle } = UseAuth();

  const navigate = useNavigate();

  // Handle Google Sign In
  const googleLogin = () => {
    LoginWithGoogle().then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const role = "buyer";
      const status = "Approved";
      const cart = [];
      const wishlist = [];
      const userInfo = { name, email, role, status, cart, wishlist };
      axios.post(`${import.meta.env.VITE_API_URL}/users`, userInfo)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Successfully Logged In!",
            showConfirmButton: false,
            timer: 1500
          });
        }
        setUser(result.user);
        navigate("/");
      })
    });
  };

  return (
    <button
      onClick={googleLogin}
      type="submit"
      className="flex gap-2 px-6 py-3 border border-primary w-full max-[400px]:text-sm text-xl font-semibold items-center justify-center mt-4 rounded-2xl"
    >
      <FcGoogle size={24} />
      <p>Sign Up With Google</p>
    </button>
  );
};

export default GoogleLogin;
