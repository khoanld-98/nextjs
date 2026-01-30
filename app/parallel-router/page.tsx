"use client";
import { FaFacebook, FaGoogle, FaTwitter, FaHeart } from "react-icons/fa";

const LoginPage = () => {
  const handleLogin = (provider: string) => {
    // Xử lý đăng nhập với provider (Facebook, Google, Twitter)
    alert(`Đăng nhập với ${provider}`);
  };

  return (
	<div 
		className="flex justify-center items-center min-h-screen bg-cover w-screen bg-no-repeat"
		style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')" }}
	>
		
	</div>
  );
};

export default LoginPage;