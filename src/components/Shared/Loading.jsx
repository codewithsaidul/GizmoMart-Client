import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <div>
      <HashLoader
        color="#DB4444"
        loading={"loading"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
