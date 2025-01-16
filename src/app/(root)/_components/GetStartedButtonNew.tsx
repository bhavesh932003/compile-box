"use client"
import { useRouter } from "next/navigation";

function GetStartedButtonNew() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home"); // Navigate to "/home"
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg
             transition-all duration-200 font-medium shadow-lg shadow-blue-500/20"
    >
      Get Started 
    </button>
  );
}

export default GetStartedButtonNew;
