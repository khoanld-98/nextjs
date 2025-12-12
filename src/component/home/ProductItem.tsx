"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/person.jpg",
  "/images/person2.jpg",
  "/images/person3.jpg",
];

const ProductIntro = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 3 giây đổi 1 ảnh

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="relative w-[400px] h-[400px]">
          {images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`Sản phẩm ${i + 1}`}
              fill
              className={`rounded-xl shadow-lg object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="md:w-1/2 md:pl-12 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Tên Sản Phẩm Nổi Bật
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Đây là sản phẩm tuyệt vời với thiết kế hiện đại, chất lượng cao và giá cả hợp lý. Hãy trải nghiệm ngay hôm nay!
        </p>
        <div className="text-2xl font-semibold text-pink-600 mb-6">
          1.200.000₫
        </div>
        <button className="bg-pink-500 text-white px-8 py-3 rounded-lg font-bold text-lg shadow hover:scale-105 transition-transform duration-200">
          Thuê ngay
        </button>
      </div>
    </div>
  );
};

export default ProductIntro;