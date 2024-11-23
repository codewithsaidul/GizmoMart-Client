import { FaMagnifyingGlass } from "react-icons/fa6";
import PropTypes from "prop-types";

const Search = ({ handleSearch }) => {
  return (
    <div>
      <form onSubmit={handleSearch} className="flex items-center w-full">
        <input
          type="text"
          placeholder="Searche..."
          className="py-2 px-6 outline-none border border-primary text-xl rounded-s-xl w-full"
          name="search"
        />
        <button type="submit" className="bg-primary py-3 px-4 rounded-e-xl text-white">
          <FaMagnifyingGlass size={22} />
        </button>
      </form>
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
