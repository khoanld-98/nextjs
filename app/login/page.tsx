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
		<div className="w-full max-w-sm bg-white p-8 rounded-lg shadow">
		<div className="flex justify-center gap-2 mb-4">
			<FaHeart className="text-pink-500 text-4xl animate-pulse" />
			<FaHeart className="text-pink-500 text-4xl animate-pulse" />
			<FaHeart className="text-pink-500 text-4xl animate-pulse" />
		</div>
			<div className="flex flex-col gap-4">
			<button
				onClick={() => handleLogin("Facebook")}
				className="flex items-center justify-start gap-2 w-full bg-blue-600 text-white pl-4 py-3 rounded hover:bg-blue-700 transition"
			>
				<FaFacebook /> Đăng nhập với Facebook
			</button>

			<button
				onClick={() => handleLogin("Google")}
				className="flex items-center justify-start gap-2 w-full bg-red-500 text-white pl-4 py-3 rounded hover:bg-red-600 transition cursor-pointer"
			>
				<FaGoogle /> Đăng nhập với Google
			</button>

			<button
				onClick={() => handleLogin("Twitter")}
				className="flex items-center justify-start gap-2 w-full bg-sky-500 text-white pl-4 py-3 rounded hover:bg-sky-600 transition cursor-pointer"
			>
				<FaTwitter /> Đăng nhập với Twitter
			</button>
		</div>
	  </div>
	</div>
  );
};

export default LoginPage;