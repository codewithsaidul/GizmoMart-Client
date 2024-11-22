import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/useAuth";

const UpdateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const navigate = useNavigate();
  const { user } = UseAuth()

// Get Product Data from db using Id
  const {
    _id,
    productName,
    productImage,
    productCategory,
    productBrand,
    productPrice,
    productQuantity,
    productDescription
  } = useLoaderData();
  const userId = _id;

  console.log(typeof userId)
  //   Handle Add Products
  const onSubmit = async (data) => {
    const productName = data.productName;
    const productImage = data.productImage;
    const productPrice = data.productPrice;
    const productQuantity = data.productQuantity;
    const productCategory = data.productCategory;
    const productBrand = data.productBrand;
    const productDescription = data.productDescription;
    const sellerEmail = user?.email;
    const sellerStatus = user?.status;

    // Create a Object for storing the product information
    const product = {
      productName,
      productImage,
      productPrice,
      productQuantity,
      productCategory,
      productBrand,
      productDescription,
      sellerEmail,
      sellerStatus
    };


    try {
        const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/products/update/${userId}`, product)
        
        if (data.modifiedCount > 0) {
            navigate('/dashboard/my-products')
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Product Updated Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
        }
    } catch {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Product Update Failed!",
            showConfirmButton: false,
            timer: 1500,
          });
    }

  };

  return (
    <div className="my-5">
      <h2 className="text-2xl text-primary font-bold mb-10 text-center">
        Update Product
      </h2>

      {/* Add Product Form Container */}
      <div>
        {/* Add Product Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-12 gap-6"
        >
          {/* Product Name */}
          <div className="col-span-12 md:col-span-6">
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              type="text"
              id="product-name"
              defaultValue={productName}
              {...register("productName", { required: true })}
            />
            {errors.productName && (
              <p className="text-sm text-red-600">Product Name is required</p>
            )}
          </div>

          {/* Product Image Url */}
          <div className="col-span-12 md:col-span-6">
            <label className="block text-sm font-medium text-gray-700">
              Product Image URL
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              type="text"
              id="product-name"
              defaultValue={productImage}
              {...register("productImage", { required: true })}
            />
            {errors.imageUrl && (
              <p className="text-sm text-red-600">
                Product Image URL is required
              </p>
            )}
          </div>

          {/* Product Price */}
          <div className="col-span-12 md:col-span-6">
            <label className="block text-sm font-medium text-gray-700">
              Product Price
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              type="text"
              id="product-name"
              defaultValue={productPrice}
              {...register("productPrice", {
                required: true,
                min: 1,
              })}
            />
            {errors?.productPrice && (
              <p className="text-sm text-red-600">
                {errors?.productPrice?.message.type === "required"
                  ? "Product Price is required"
                  : "Price must be greater than  to 0"}
              </p>
            )}
          </div>

          {/* Product Quantity */}
          <div className="col-span-12 md:col-span-6">
            <label className="block text-sm font-medium text-gray-700">
              Product Quantity
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              type="number"
              id="product-name"
              defaultValue={productQuantity}
              {...register("productQuantity", {
                required: true,
                min: 1,
              })}
            />
            {errors.productQuantity && (
              <p className="text-sm text-red-600">
                {errors?.productQuantity?.message.type === "required"
                  ? "Product Quantity is required"
                  : "Price must be greater than or Equal  to 0"}
              </p>
            )}
          </div>

          {/* Product Category */}
          <div className="col-span-12 md:col-span-6">
            <label className="block text-sm font-medium text-gray-700">
              Product Category
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              type="text"
              id="product-name"
              defaultValue={productCategory}
              {...register("productCategory", { required: true })}
            />
            {errors.category && (
              <p className="text-sm text-red-600">
                Product Category is required
              </p>
            )}
          </div>

          {/* Product Brand */}
          <div className="col-span-12 md:col-span-6">
            <label className="block text-sm font-medium text-gray-700">
              Product Brand
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              type="text"
              id="product-name"
              defaultValue={productBrand}
              {...register("productBrand", { required: true })}
            />
            {errors.brand && (
              <p className="text-sm text-red-600">Product Brand is required</p>
            )}
          </div>

          {/* Product Descipton */}
          <div className="col-span-12 md:col-span-12">
            <label className="block text-sm font-medium text-gray-700">
              Product Descipton
            </label>
            <textarea
              className="mt-1 block w-full h-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              type="text"
              id="product-name"
              defaultValue={productDescription}
              {...register("productDescription", {
                required: true,
                minLength: {
                  value: 50,
                  message: "Description must be at least 50 characters long",
                },
              })}
            />
            {errors.description && (
              <p className="text-sm text-red-600">
                {errors.description.type === "required"
                  ? "Product Description is required"
                  : errors.description.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-12 mt-6">
            <input
              type="submit"
              className="w-full px-4 py-2 bg-primary text-white rounded-md shadow-sm hover:bg-primary-dark"
              value="Update Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;