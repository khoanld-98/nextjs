"use client";
import { FaFacebook, FaGoogle, FaTwitter, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

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
		{/* <form onSubmit={handleSubmit}>
		  <div className="mb-4">
		  	<label className="block mb-1 font-bold text-gray-800">Tên đăng nhập</label>
			<input
			  type="text"
			  value={username}
			  onChange={e => setUsername(e.target.value)}
			  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring text-gray-500"
			/>
		  </div>
		  <div className="mb-4">
		  <label className="block mb-1 font-bold text-gray-800">Mật khẩu</label>
			<input
			  type="password"
			  value={password}
			  onChange={e => setPassword(e.target.value)}
			  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring text-gray-500"
			/>
		  </div>
		  {error && <div className="text-red-500 mb-4">{error}</div>}
		  <button
			type="submit"
			className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
		  >
			Đăng nhập
		  </button>
		</form> */}
	  </div>
	</div>
  );
};

export default LoginPage;