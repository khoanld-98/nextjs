"use client";

import { useState } from "react";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ keyword });
  };

  return (
    <section className="w-full px-4 py-6 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="
          max-w-3xl mx-auto
          bg-white rounded-xl shadow
          p-4
          flex flex-col gap-3
        "
      >
        {/* Hàng input + button trên mobile */}
        <div className="flex flex-row items-stretch gap-2">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Nhập từ khóa..."
            className="
              flex-1
              border border-gray-300 rounded-lg
              px-3 py-2
              text-sm
              focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500
            "
          />

          <button
            type="submit"
            className="
                px-4 py-2
                bg-pink-500 text-white
                rounded-lg
                text-sm font-semibold
                whitespace-nowrap
                hover:bg-pink-600
                transition-colors
            "
          >
            Tìm kiếm
          </button>
        </div>
      </form>
    </section>
  );
}