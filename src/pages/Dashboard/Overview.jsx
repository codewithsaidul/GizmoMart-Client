import useUserData from "../../hooks/useUserData"


const Overview = () => {
    const userData = useUserData()
  return (
    <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-3xl font-bold text-primary">{userData?.email}</h2>
    </div>
  )
}

export default Overview