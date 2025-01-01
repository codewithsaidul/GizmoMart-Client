import Loading from "../components/Shared/Loading";
import Wishlist from "../components/wishlists/Wishlist";
import useWishlist from "../hooks/useWishlist";

const Wishlists = () => {

  const [wishlists, refetch, isLoading] = useWishlist();


  if (isLoading) return <Loading />;

  return (
    <div className="mt-5 mb-20">
      <h2 className="text-2xl text-primary font-bold text-center mb-10">
        My Wishlists
      </h2>

      {wishlists.length === 0 ? (
        <div className="flex justify-center items-center min-h-[calc(100vh-100px)] text-center">
          <p className="text-2xl text-black font-semibold">
            Your Wishlist is Empty
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-6 xl:gap-12">
          {wishlists.map((product) => (
            <Wishlist key={product._id} product={product} refetch={refetch} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlists;
