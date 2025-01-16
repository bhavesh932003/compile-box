"use client"
import { useRouter } from "next/navigation";

function GetStartedButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home"); // Navigate to "/home"
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white 
        bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg 
        hover:from-blue-600 hover:to-blue-700 transition-all"
    >
      Get Started 
    </button>
  );
}

export default GetStartedButton;
