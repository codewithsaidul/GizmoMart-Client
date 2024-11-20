import { FaMagnifyingGlass } from "react-icons/fa6"


const Search = () => {
  return (
    <div>
        <div className="flex items-center w-full">
            <input type="text" placeholder="Searche..." className="py-2 px-6 outline-none border border-primary text-xl rounded-s-xl w-full" />
            <span className="bg-primary py-3 px-4 rounded-e-xl text-white">
                <FaMagnifyingGlass size={22} />
            </span>
        </div>
    </div>
  )
}

export default Search