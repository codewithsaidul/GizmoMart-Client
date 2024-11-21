import { useForm } from "react-hook-form";
import Image from "../../assets/loginimage.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";
import { useEffect } from "react";

const Login = () => {

  const { user, LoginUser } = UseAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/"

  useEffect(() => {
    if (user) return navigate('/')
  }, [user, navigate])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   Handle registration
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    

    LoginUser(email, password)
    .then((result) => {
      if (result.user) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfully Logged In!",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, { replace: true });
        reset();
      }
    })
    .catch (() => {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Failed to Log In!",
        showConfirmButton: false,
        timer: 1500
      });
    })

  };

  return (
    <div className=" py-8 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 shadow-2xl max-[400px]:px-6 p-10 rounded-xl">
        {/* image */}
        <figure className="w-ful lg:w-1/2 h-fit order-2 lg:order-1">
          <img src={Image} alt={Image} />
        </figure>

        {/* Registration from */}
        <div className="w-ful  lg:w-1/2 order-1 lg:order-2">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <h2 className="text-2xl font-bold mb-6">LogIn To GizmoMart</h2>
            <div>
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
                  {...register("password", {required: true})}
                />
                {errors.password && (
                  <p className="text-sm my-2 font-bold text-red-700">
                    {errors.password.message
                      ? errors.password.message
                      : "Password is Required"}
                  </p>
                )}
              </div>

              {/* ===================== Submti button */}
              <div className="form-control mt-6">
                <button className="btn bg-primary text-white hover:bg-primary">
                  Login
                </button>
              </div>
            </div>

          </form>
            {/* ============ Social Login ===================== */}
            <div>
                <GoogleLogin />
              <p className="text-base font-medium text-slate-500 mt-3 text-center">
                Don&apos;t Haven&apos;t Account?{" "}
                <Link to="/register" className="text-primary font-bold">
                  Register
                </Link>
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
