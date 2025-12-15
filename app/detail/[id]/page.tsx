"use client";

import { useEffect, useState } from "react";

const images = ["/images/person.jpg", "/images/person2.jpg", "/images/person3.jpg"];

export default function UserDetailPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      <main className="flex flex-col gap-4 items-center justify-center px-3 py-4 sm:px-4 sm:py-6">
        <section
          className="
            flex w-full max-w-6xl flex-col gap-4 rounded-2xl bg-white p-4 shadow-xl
            sm:flex-row sm:gap-6 sm:p-6
          "
        >
          {/* Ảnh bên trái (mobile: trên, desktop: trái) */}
          <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-72 sm:w-72 sm:flex-shrink-0">
            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`User image ${i + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Thông tin bên phải */}
          <div className="flex flex-1 flex-col gap-3">
            {/* Tên + giá theo giờ */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Nguyễn Văn A
              </h1>

              <div className="flex flex-col items-start gap-2 sm:items-end">
                <div className="inline-flex items-baseline gap-1 self-start rounded-full bg-gradient-to-tr from-orange-500 to-yellow-300 px-3 py-1.5 text-slate-900 shadow-lg sm:self-end sm:px-4 sm:py-2">
                  <span className="text-lg font-bold sm:text-xl">
                    350.000đ
                  </span>
                  <span className="text-[10px] font-semibold uppercase sm:text-[11px]">
                    /giờ
                  </span>
                </div>
              </div>
            </div>

            {/* Rating + vị trí */}
            <div className="flex flex-col gap-2 text-xs text-slate-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 sm:text-sm">
              <div className="flex items-center gap-1 text-amber-500">
                <span>★★★★☆</span>
                <span className="font-semibold text-slate-900">4.5</span>
                <span className="text-slate-500">(120 đánh giá)</span>
              </div>
            </div>

            {/* Tag dịch vụ */}
            <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs">
              <span className="rounded-full bg-pink-50 px-3 py-1 text-pink-600 border border-pink-200">
                Hẹn hò
              </span>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-indigo-600 border border-indigo-200">
                Xem phim
              </span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-600 border border-emerald-200">
                Đi chơi
              </span>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-600 border border-amber-200">
                Làm việc nhà
              </span>
              <span className="rounded-full bg-sky-50 px-3 py-1 text-sky-600 border border-sky-200">
                Giúp việc
              </span>
            </div>

            {/* Thông tin liên hệ */}
            <p className="text-sm font-semibold text-sky-600">
              Frontend Developer
            </p>
            <p className="text-xs text-slate-600 sm:text-sm">
              nguyenvana@example.com
            </p>

            <strong className="text-xs text-gray-600 block mb-1">
                Hà Nội - Ba Đình
            </strong>
            {/* Nút Thuê ngay */}
            <button
              className="mt-1 w-32 rounded-lg bg-pink-500 px-5 py-3 text-[11px] text-white transition-colors hover:bg-pink-600 md:text-sm"
            >
              Thuê Ngay
            </button>
          </div>
        </section>
        <section
          className="
            flex w-full max-w-6xl flex-col gap-4 rounded-2xl bg-white p-4 shadow-xl
            sm:flex-row sm:gap-6 sm:p-6
          "
        >
            { id }
        </section>
      </main>
    </div>
  );
}