import Button from "../Shared/Button";
import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[calc(100vh-100px)]"
        style={{
          backgroundImage: "url(/banner.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="w-full  sm:w-[500px] md:w-[700px]">
            <h1 className="mb-5 max-[350px]:text-xl text-2xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-primary/100">GizmoMart</span> - Your Ultimate Shopping Destination
            </h1>
            <p className="mb-5 max-[350px]:text-sm sm:text-lg">
              GizmoMart offers everything from electronics to essentials, with
              unbeatable prices, fast delivery, and secure shopping. Shop now!
            </p>
            
            {/* ======================== Button Component ================================== */}
            <Link to="/products"><Button title="Star Shopping" stl={"bg-primary border-primary hover:bg-transparent text-white text-xl"} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
