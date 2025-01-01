import axios from "axios";
import ProductSidebar from "../components/Product/ProductSidebar";
import Search from "../components/Product/Search";
import Sort from "../components/Product/Sort";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Shared/Loading";
import ProductCard from "../components/Product/ProductCard";
import { useEffect, useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const Products = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 9;

  // Get All Products
  const {
    refetch,
    data: products = [],
    isLoading,
  } = useQuery({
    queryKey: ["products", "search", "sort", "brand", "category"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/products?productName=${search}&page=${page}&limit=${limit}&sort=${sort}&productBrand=${brand}&productCategory=${category}`
      );
      setUniqueBrand(data.brand);
      setUniqueCategory(data.category);
      setTotalPages(Math.ceil(data.totalProducts / limit));
      return data;
    },
  });

  useEffect(() => {
    if (search) {
      refetch();
    }
    if (sort) {
      refetch();
    }
    if (brand) {
      refetch();
    }
    if (category) {
      refetch();
    }
  }, [search, page, sort, brand, category, refetch]);

  // Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };

  // Handle page numeber dynamically
  const handlePage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Handle Reset For Resting Serarch, Sort, or Filer
  const handleReset = () => {
    setSearch("");
    setSort("asc");
    setBrand("");
    setCategory("");
    window.location.reload();
  };

  // Showing Loading Screen if data not found
  if (isLoading) return <Loading />;

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 mt-10 mb-20">
      <h2 className="text-3xl text-primary font-bold mb-12 text-center">
        All Products
      </h2>

      {/* ==================== Search & Sort ===================== */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        <Search handleSearch={handleSearch} />
        <Sort setSort={setSort} />
      </div>

      {/* =============== Filter By Category, Brand & All Products ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-3 h-full">
          <ProductSidebar
            setBrand={setBrand}
            setCategory={setCategory}
            handleReset={handleReset}
            uniqueBrand={uniqueBrand}
            uniqueCategory={uniqueCategory}
          />
        </div>
        <div className="lg:col-span-9">
          {products.products?.length === 0 ? (
            <div className="flex justify-center items-center min-h-[calc(100vh-100px)] text-center">
              <p className="text-2xl text-black font-semibold">
                Data Not Found
              </p>
            </div>
          ) : (
            <ProductCard products={products.products} />
          )}

          {/* ================= Pagination ===================== */}
          {products.products?.length !== 0 && (
            <div className="flex justify-center items-center gap-2 my-8">
              <button
                onClick={() => handlePage(page - 1)}
                className="btn rounded-full"
                disabled={page === 1}
              >
                <FaRegArrowAltCircleLeft size={24} />
              </button>
              <p>
                Page {page} of {totalPages}
              </p>
              <button
                onClick={() => handlePage(page + 1)}
                className="btn rounded-full"
                disabled={page === totalPages}
              >
                <FaRegArrowAltCircleRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
