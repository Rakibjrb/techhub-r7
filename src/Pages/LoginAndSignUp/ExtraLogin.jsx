import { BsGoogle, BsFacebook } from "react-icons/bs";
import toast from "react-hot-toast";

const ExtraLogin = () => {
  const handleGoogleLogin = () => {
    toast.success("clicked");
  };

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center mb-6">
        <p className="w-1/4 h-[2px] bg-white"></p>
        <p className="text-center text-xl text-white">Sign in Using</p>
        <p className="w-1/4 h-[2px] bg-white"></p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline font-poppins flex-1 text-white"
        >
          <BsGoogle />
          Google
        </button>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline font-poppins flex-1 text-white"
        >
          <BsFacebook />
          Facebook
        </button>
      </div>
    </div>
  );
};

export default ExtraLogin;
