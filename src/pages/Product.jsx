import Products from "../components/Product/Products"
import ProductSidebar from "../components/Product/ProductSidebar"
import Search from "../components/Product/Search"
import Sort from "../components/Product/Sort"


const Product = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 mt-10 mb-20">
      <h2 className="text-3xl text-primary font-bold mb-12 text-center">All Products</h2>

      {/* ==================== Search & Sort ===================== */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        <Search />
        <Sort />
      </div>


      {/* =============== Filter By Category, Brand & All Products ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-3">
          <ProductSidebar />
        </div>
        <div className="lg:col-span-9">
          <Products />
        </div>
      </div>
    </div>
  )
}

export default Product