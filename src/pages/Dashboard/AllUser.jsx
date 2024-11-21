import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Shared/Loading";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import useUserData from "../../hooks/useUserData";
// import { useState } from "react";
import Swal from "sweetalert2";

const AllUser = () => {
  const userData = useUserData();


  // Get the all user from db
  const { refetch, data: users = [], isLoading } = useQuery({
    queryKey: "users",
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
      return data;
    },
  });

  //   Get The All User Length
  const userLength = users.length;


  //   Delete User From Database
  const handleDeleteUser = async (userId, role) => {
    try {
      if (userData?.role === role) {
        return Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Cann't Delete Super Admin",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/user/${userId}`
      );


      if (data.deletedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Deleted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      

      
    } catch (error) {;
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: error.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
   
  };


  //   Showing Loading Screen if Data Loading
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
                        <button
                          onClick={() => handleDeleteUser(user._id, user.role)}
                          className="text-red-500 font-bold"
                        >
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
            <h2 className="text-3xl text-primary font-bold">
              User Data Not Found!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUser;
