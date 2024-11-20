import { FaEnvelope, FaPhone } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"


const ContactWIthUs = () => {
  return (
    <div className="my-20">
        <h2 className="text-2xl font-bold text-slate-700 mb-10 text-center sm:text-left">
        Contact With <span className="text-primary">Us</span> Say
      </h2>

      {/* ================ Contact With Us Container ==================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="flex flex-col items-center gap-4 border-2 border-primary p-6 rounded-lg">
            <span>
                <FaPhone size={24}/>
            </span>
            <p className="text-xl font-semibold text-slate-500 text-center">+88015-88888-9999</p>
        </div>
        <div className="flex flex-col items-center gap-4 border-2 border-primary p-6 rounded-lg">
            <span>
                <FaLocationDot size={24}/>
            </span>
            <p className="text-xl font-semibold text-slate-500 text-center">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
        </div>
        <div className="flex flex-col items-center gap-4 border-2 border-primary p-6 rounded-lg">
            <span>
                <FaEnvelope size={24}/>
            </span>
            <p className="text-xl font-semibold text-slate-500 text-center">gizmomart@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default ContactWIthUs