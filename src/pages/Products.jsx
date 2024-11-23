import axios from "axios";
import ProductSidebar from "../components/Product/ProductSidebar";
import Search from "../components/Product/Search";
import Sort from "../components/Product/Sort";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Shared/Loading";
import ProductCard from "../components/Product/ProductCard";
import { useEffect, useState } from "react";

const Products = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);

  // Get All Products
  const { refetch, data: products = [], isLoading } = useQuery({
    queryKey: ["products", "search", "sort", "brand", "category"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/products?productName=${search}&sort=${sort}&productBrand=${brand}&productCategory=${category}`
      );
      setUniqueBrand(data.brand)
      setUniqueCategory(data.category)
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
  }, [search, sort, brand, category, refetch])

 

  console.log(products.products)

  // Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
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
        <div className="lg:col-span-3">
          <ProductSidebar
            setBrand={setBrand}
            setCategory={setCategory}
            handleReset={handleReset}
            uniqueBrand={uniqueBrand}
            uniqueCategory={uniqueCategory}
          />
        </div>
        <div className="lg:col-span-9">
          <ProductCard products={products.products} />
        </div>
      </div>
    </div>
  );
};

export default Products;
