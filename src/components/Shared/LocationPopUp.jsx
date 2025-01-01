// import { useState } from "react"; 
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineWrongLocation } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
// import axios from "axios";

const LocationPopUp = () => {
  // const [address, setAddress] = useState("");
  // const [loading, setLoading] = useState(false);

  // const handleAutoLocation =  () => {
  //   if (navigator.geolocation) {
  //     setLoading(true);
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;

  //         // Fetch address using reverse geocoding
  //        axios
  //           .get(
  //             `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
  //           )
  //           .then((response) => {
  //             setAddress(response.data.display_name);
  //           })
  //           .catch((error) => {
  //             console.error("Error fetching address:", error);
  //             setAddress("Unable to fetch address.");
  //           })
  //           .finally(() => setLoading(false));
  //           console.log(data)
  //       },
  //       (error) => {
  //         console.error("Error fetching location:", error);
  //         setAddress("Location permission denied or unavailable.");
  //         setLoading(false);
  //       }
  //     );
  //   } else {
  //     alert("Geolocation is not supported by your browser.");
  //   }
  // };

  // console.log(address)

  const { address, handleAutoLocation } = useAuth()

  console.log(address)

  return (
    <div className="fixed bottom-6 left-0 right-0 w-[95%] md:w-[500px] mx-auto bg-white shadow-[0_4px_24px_rgba(0,0,0,0.3)] z-50 py-5 px-10 rounded-2xl">
      <div className="mb-8">
        <div className="text-center flex justify-center items-center">
          <MdOutlineWrongLocation size={60} className="!text-center" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-black my-5 text-center">
          Location Permission is Off
        </h2>
        <p className="text-base font-normal text-slate-500 text-center">
          We need to your location to find the nearest store & provide you a
          seamless delivery experience
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <button
          onClick={handleAutoLocation}
          className="w-full bg-primary py-2 px-5 text-xl text-white rounded-2xl"
        >
          Enable Location
        </button>
        <button className="w-full bg-transparent py-2 px-5 text-xl text-primary border-2 rounded-2xl flex justify-center items-center gap-2">
          <span>
            <FaMagnifyingGlass size={24} />
          </span>
          <h5>Search Your Location Manually</h5>
        </button>
      </div>
    </div>
  );
};

export default LocationPopUp;
