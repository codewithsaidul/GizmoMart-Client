import PropTypes from "prop-types";


const Sort = ( { setSort } ) => {
  return (
    <div className="max-[350px]:w-full">
      <select className="select select-bordered w-full max-w-xs" onChange={(e) => setSort(e.target.value)}>
        <option value="asc">Low to High</option>
        <option value="des">High to Low</option>
      </select>
    </div>
  );
};


Sort.propTypes = {
  setSort: PropTypes.func.isRequired,
};

export default Sort;
