import { FaFilter } from "react-icons/fa";
import Button from "../Shared/Button";

const ProductSidebar = () => {
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
        <select className="select w-full">
          <option disabled selected>
            Search By Category
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>


        {/* =================== Search by Brand */}
        <select className="select w-full">
          <option disabled selected>
            Search By brand
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>

        {/* ==================== Reset Option ================= */}
        <Button title="Reset" stl="bg-primary w-full rounded-lg hover:bg-primary/80" />
      </div>
    </div>
  );
};

export default ProductSidebar;
