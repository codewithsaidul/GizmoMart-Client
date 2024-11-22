import { useForm } from "react-hook-form";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const productName = data.productName;
    const productImage = data.productImage;
    const productPrice = data.productPrice;
    const productQuantity = data.productQuantity;
    const productCategory = data.productCategory;
    const productBrand = data.productBrand;
    const productDescription = data.productDescription;

    const product = {
        productName, productImage, productPrice, productQuantity, productCategory, productBrand, productDescription
    }
    reset()
    console.log(product);
  };

  return (
    <div className="my-5">
      <h2 className="text-2xl text-primary font-bold mb-10 text-center">
        Add New Product
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
              placeholder="Enter product name"
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
              placeholder="Enter product Image URL"
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
              type="number"
              id="product-name"
              placeholder="Enter product Price"
              {...register("productPrice", { required: true })}
            />
            {errors.price && (
              <p className="text-sm text-red-600">Product Price is required</p>
            )}
          </div>

          {/* Product Price */}
          <div className="col-span-12 md:col-span-6">
            <label className="block text-sm font-medium text-gray-700">
              Product Quantity
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              type="number"
              id="product-name"
              placeholder="Enter product Quantity"
              {...register("productQuantity", { required: true })}
            />
            {errors.productQuantity && (
              <p className="text-sm text-red-600">Product Quantity is required</p>
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
              placeholder="Enter product Category"
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
              placeholder="Enter product Brand Name"
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
              placeholder="Enter product Descipton"
              {...register("productDescription", {
                required: true,
                minLength: {
                  value: 50,
                  message: "Description must be at least 50 characters long",
                },
                maxLength: {
                  value: 500,
                  message: "Description must be at most 500 characters long",
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
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
