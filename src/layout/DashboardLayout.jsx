import { useState } from "react"
import DashNavbar from "../components/Dashboard/DashNavbar"
import Sidebar from "../components/Dashboard/Sidebar"
import MobileSidebar from "../components/Dashboard/MobileSidebar"
import { Outlet } from "react-router-dom"


const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  const handleSidebar = () => {
    setOpen(!open);
  }
  return (
    <div>
      <div>
        <DashNavbar handleSidebar={handleSidebar} />
      </div>

      <div className="grid grid-cols-12 gap-0 lg:gap-6">
        <div className="col-span-3">
              <MobileSidebar open={open} setOpen={setOpen} />
              <div className="hidden lg:inline-block w-full"><Sidebar /></div>
        </div>

        <div className="col-span-12 lg:col-span-9 w-full px-4 sm:px-6 md:px-10 lg:px-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout