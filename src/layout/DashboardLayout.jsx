import { useState } from "react"
import DashNavbar from "../components/Dashboard/DashNavbar"
import Sidebar from "../components/Dashboard/Sidebar"
import MobileSidebar from "../components/Dashboard/MobileSidebar"


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

      <div className="grid grid-cols-12">
        <div className="col-span-3">
              <MobileSidebar open={open} setOpen={setOpen} />
              <div className="hidden lg:inline-block"><Sidebar /></div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout