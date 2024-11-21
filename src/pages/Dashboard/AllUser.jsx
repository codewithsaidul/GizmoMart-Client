import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Shared/Loading";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";

const AllUser = () => {
  // Get the all user from db
  const { data: users = [], isLoading } = useQuery({
    queryKey: "users",
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
      return data;
    },
  });

  //   Get The All User Length
  const userLength = users.length;
  console.log(userLength);

  if (isLoading) return <Loading />;
  return (
    <div>
      {/* All User Container */}
      <div>
        {userLength > 0 ? (
          <div>
            <h2 className="text-2xl font-bold text-slate-700 mt-6 mb-10 text-center  ">
              All User ({userLength})
            </h2>

            {/* =================== Data Containerr ===================== */}
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
    
                    {users.map((user) => (
                      <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td
                          className={`${
                            user.status === "Approved"
                              ? "text-green-500 font-bold"
                              : "text-orange-500 font-bold"
                          }`}
                        >
                          {user.status}
                        </td>
                        <td className="flex items-center gap-4">
                            <button className="text-blue-700 font-bold">
                                <FaRegEdit size={20} />
                            </button>
                            <button className="text-red-500 font-bold">
                                <MdOutlineDeleteForever size={24} />
                            </button>
  
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-screen">
            <h2 className="text-3xl text-primary font-bold">User Data Not Found!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUser;
