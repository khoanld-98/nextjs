"use client";

import { useState } from "react";

type FilterValues = {
  desire: string;
  location: string;
  sortPrice: "asc" | "desc" | "";
  minPrice: number | null;
  maxPrice: number | null;
};



export default function FilterBar() {
  const [desire, setDesire] = useState("");
  const [location, setLocation] = useState("");
  const [sortPrice, setSortPrice] = useState<"asc" | "desc" | "">("");

  const handleApply = () => {
    console.log(desire, location, sortPrice);
  };

  return (
    <section className="w-full bg-gray-50 px-4 py-4">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow p-4 mb-4 flex flex-col md:flex-row gap-3 md:items-end">
      {/* Input mong muốn */}
        <div className="flex-1">
            <label className="block text-sm font-medium mb-1 text-gray-700">
            Mong muốn
            </label>
            <input
            type="text"
            value={desire}
            onChange={(e) => setDesire(e.target.value)}
            placeholder="Nhập mong muốn (xem phim, du lịch, đi dạo...)"
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
        </div>

        {/* Vị trí */}
        <div className="md:w-40">
            <label className="block text-sm font-medium mb-1 text-gray-700">
            Vị trí
            </label>
            <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
            <option value="">Tất cả vị trí</option>
            <option value="hn">Hà Nội</option>
            <option value="hcm">TP. HCM</option>
            <option value="dn">Đà Nẵng</option>
            </select>
        </div>

        {/* Sắp xếp theo giá */}
        <div className="md:w-40">
            <label className="block text-sm font-medium mb-1 text-gray-700">
            Sắp xếp giá
            </label>
            <select
            value={sortPrice}
            onChange={(e) =>
                setSortPrice(e.target.value as "asc" | "desc" | "")
            }
            className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
            <option value="">Mặc định</option>
            <option value="asc">Giá tăng dần</option>
            <option value="desc">Giá giảm dần</option>
            </select>
        </div>
        {/* Nút áp dụng */}
        <button
            type="button"
            onClick={handleApply}
            className="md:w-28 bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-pink-600 transition-colors"
        >
            Lọc
        </button>
    </div>
    </section>
  );
}