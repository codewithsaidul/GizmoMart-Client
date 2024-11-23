import { Link, useLoaderData } from "react-router-dom";
import avater from "../assets/avatar.png";

const ProductDetails = () => {
  const {
    productName,
    productImage,
    productCategory,
    productBrand,
    productPrice,
    productQuantity,
    productDescription,
    sellerEmail
  } = useLoaderData();

  return (
    <div className="mt-8 mb-20 px-4 sm:px-8 md:px-12 lg:px-20 mx-auto">
      <div className="flex flex-col items-center gap-2 mb-10">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-bold text-center">
          Product Details of {productName}
        </h2>

        <p className="text-base text-slate-400 font-medium">
          <Link to="/">Home / </Link>
          <span className="text-primary font-bold">Product</span>
        </p>
      </div>

      {/* ============= Product Details Container =================== */}
      <div>
        <div className="flex flex-col min-[450px]:flex-row  justify-between items-center gap-10">
          {/* Product Data */}
          <div className="w-full md:w-1/2 mx-auto order-2 min-[450px]:order-1">
            <p className="text-sm font-normal text-slate-500 mb-8">
              Product &gt;{" "}
              <span className="text-primary font-bold">{productCategory}</span>
            </p>
            <h2 className="text-2xl font-bold text-primary mb-2">
              {productName}
            </h2>
            <p className="text-lg font-medium text-slate-600 mb-2">
              Brand:{" "}
              <span className="text-primary font-bold">{productBrand}</span>
            </p>
            <p className="text-lg font-medium text-slate-600 mb-2">
              Category:{" "}
              <span className="text-primary font-bold">{productCategory}</span>
            </p>
            <div className="flex items-center gap-6 sm:gap-10">
              <span className="text-lg font-medium text-slate-600 mb-2">
                Price:{" "}
                <span className="text-primary font-bold">${productPrice}</span>
              </span>
              <span className="text-lg font-medium text-slate-600 mb-2">
                Quantity:{" "}
                <span className="text-primary font-bold">
                  {productQuantity}
                </span>
              </span>
            </div>

            {/* Seller Details */}
            <div className="mt-4 flex items-center gap-3">
              <figure className="w-14 h-14 flex justify-center items-center border-4 border-primary rounded-full">
                <img src={avater} alt="avater" />
              </figure>

              <h3 className="text-xl font-medium text-primary">
                {sellerEmail}
              </h3>
            </div>
          </div>
          {/* Product Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center order-1 min-[450px]:order-2">
            <figure className="min-[450px]:w-40 min-[450px]:h-40 sm:w-72 sm:h-72 md:h-80 md:w-80 lg:w-96 lg:h-96 shadow-2xl rounded-full p-10 flex justify-center items-center border-4 border-primary">
              <img
                src={productImage}
                className="w-full h-full"
                alt={productImage}
              />
            </figure>
          </div>
        </div>
      </div>
      {/* ====================== Product Description ========================= */}
      <div className="mt-10">
        <h3 className="max-[340px]:text-xl text-2xl sm:text-3xl font-bold mt-7 mb-4">
          Product Full Specification
        </h3>
        <p className="text-base sm:text-lg font-medium text-gray-400">
          {productDescription}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
