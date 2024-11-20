const Sort = () => {
  return (
    <div className="max-[350px]:w-full">
      <select className="select select-bordered w-full max-w-xs">
        <option>Low to High</option>
        <option>High to Low</option>
      </select>
    </div>
  );
};

export default Sort;
