import { BsGoogle } from "react-icons/bs";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const ExtraLogin = () => {
  const { createAccountWithGoogle } = useContext(AuthContext);
  const navigation = useNavigate();

  const handleGoogleLogin = () => {
    createAccountWithGoogle()
      .then(() => {
        toast.success("Google sign in success ......");
        navigation("/");
      })
      .catch((e) => {
        console.log(e);
        toast.error("Something went wrong !!!");
        setTimeout(() => {
          toast.success("Please try again .....");
        }, 500);
      });
  };

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center mb-6">
        <p className="w-1/4 h-[2px] bg-white"></p>
        <p className="text-center text-xl text-white">Sign in Using</p>
        <p className="w-1/4 h-[2px] bg-white"></p>
      </div>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline font-poppins w-full text-white"
      >
        <BsGoogle />
        Google
      </button>
    </div>
  );
};

export default ExtraLogin;
