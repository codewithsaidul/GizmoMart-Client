import MyProduct from "../../components/Dashboard/MyProduct"


const MyProducts = () => {
  return (
    <div className="mt-6">
        <h2 className="text-2xl text-center text-primary font-bold mb-7">My Products</h2>


        {/* ====================== Products Container ======================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product 1 */}
            <MyProduct />
        </div>
    </div>
  )
}

export default MyProducts