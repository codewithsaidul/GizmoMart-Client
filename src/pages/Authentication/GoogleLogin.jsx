import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  return (
    <button
      type="submit"
      className="flex gap-2 px-6 py-3 border border-primary w-full max-[400px]:text-sm text-xl font-semibold items-center justify-center mt-4 rounded-2xl"
    >
      <FcGoogle size={24} />
      <p>Sign Up With Google</p>
    </button>
  );
};

export default GoogleLogin;
