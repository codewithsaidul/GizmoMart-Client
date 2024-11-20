import { CategoryData } from "../../data/Data";

const Category = () => {
  return (
    <div className="my-20">
      <h2 className="text-2xl font-bold text-slate-700 mb-10 text-center sm:text-left">
        Browse By <span className="text-primary">Category</span>
      </h2>

      {/* ============================= Category Container ========================= */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 min-[400px]:gap-6">
        {
          // Sample Category Data
          CategoryData.map((category) => (
            <div key={category.id} className="border p-10 hover:bg-primary group duration-500 hover:duration-500 rounded-2xl">
              <div className="flex flex-col justify-center items-center gap-3">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-12 h-12"
                />
                <h3 className="text-lg min-[400px]:text-xl font-medium group-hover:text-white duration-500 group-hover:duration-500">{category.name}</h3>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Category;
