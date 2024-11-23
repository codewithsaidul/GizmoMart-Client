import { FaFilter } from "react-icons/fa";
import Button from "../Shared/Button";

const ProductSidebar = ({
  uniqueCategory,
  uniqueBrand,
  setBrand,
  setCategory,
  handleReset,
}) => {
  return (
    <div className="bg-slate-300 h-fit lg:sticky lg:top-6 lg:min-h-screen p-6 rounded-md">
      <div className="flex items-center gap-2 border-b-2 border-black pb-4">
        <span>
          <FaFilter size={24} />
        </span>
        <p className="text-2xl font-semibold">Filter</p>
      </div>

      <div className="flex flex-col gap-6 w-full mt-6">
        {/* =================== Search by Category */}
        <select
          className="select w-full"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disabled selected>
            Search By Category
          </option>
          {uniqueCategory.map((category, i) => (
            <option key={i} value={category}>{category}</option>
          ))}
        </select>

        {/* =================== Search by Brand */}
        <select
          className="select w-full"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option disabled selected>
            Search By brand
          </option>
          {uniqueBrand.map((brand, i) => (
            <option key={i} value={brand}>{brand}</option>
          ))}
        </select>

        {/* ==================== Reset Option ================= */}
        <button
          onClick={handleReset}
          type="submit"
          className="btn text-white text-xl bg-primary w-full rounded-lg hover:bg-primary/80"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProductSidebar;
