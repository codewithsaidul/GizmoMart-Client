import { useForm } from "react-hook-form";
import Image from "../../assets/loginimage.png";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const { setUser, CreateUser } = UseAuth();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // For Navigation after registration
  const navigate = useNavigate();

  //   Handle registration
  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const role = data.role;
    const status = role === "buyer" ? "Approved" : "Pending"
    const cart = [];
    const wishlist = [];

    const userInfo = {
      name,
      email,
      role,
      status,
      cart,
      wishlist,
    };

    // handle New User registration==================================

    CreateUser(email, password).then((result) => {
      axios
        .post(`${import.meta.env.VITE_API_URL}/users`, userInfo)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Account Created Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          setUser(result.user);
          navigate("/");
        });
    });

    reset();
  };

  return (
    <div className=" py-8 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 shadow-2xl max-[400px]:px-6  p-10 rounded-xl">
        {/* image */}
        <figure className="w-ful lg:w-1/2 h-fit order-2 lg:order-1">
          <img src={Image} alt={Image} />
        </figure>

        {/* Registration from */}
        <div className="w-ful  lg:w-1/2 order-1 lg:order-2">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <h2 className="text-2xl font-bold mb-6">Create an Account</h2>
            <div>
              {/* ========== for name field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-sm my-2 font-bold text-red-700">
                    {errors.name.message
                      ? errors.name.message
                      : "Name is required"}
                  </p>
                )}
              </div>

              {/* ========== for email field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-sm my-2 font-bold text-red-700">
                    {errors.email.message
                      ? errors.email.message
                      : "Email is Required"}
                  </p>
                )}
              </div>

              {/* ========== for password field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-sm my-2 font-bold text-red-700">
                    {errors.password.message
                      ? errors.password.message
                      : "Password is Required"}
                  </p>
                )}
              </div>

              {/* ========== for confirm  password field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === watch("password"),
                    message: "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-sm my-2 font-bold text-red-700">
                    Password does not match
                  </p>
                )}
              </div>

              {/* ========== for role field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>

                <select
                  className="select select-bordered w-full"
                  {...register("role", { required: "Role is required" })}
                >
                  <option value="" disabled>
                    Select a Role
                  </option>
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </select>

                {errors.role && (
                  <p className="text-red-700 my-2 text-sm font-bold">
                    {errors.role.message
                      ? errors.role.message
                      : "Role is Required"}
                  </p>
                )}
              </div>

              {/* ===================== Submti button */}
              <div className="form-control mt-6">
                <button className="btn bg-primary text-white hover:bg-primary">
                  Create Account
                </button>
              </div>
            </div>

            
          </form>
          {/* Social Login */}
          <div>
            <GoogleLogin />
            <p className="text-base font-medium text-slate-500 mt-3 text-center">
              Already have account?{" "}
              <Link to="/login" className="text-primary font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
