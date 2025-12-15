"use client";
import Image from "next/image";
import { useState } from "react";

type PropListItem = {
    title: string;
}

type Item = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
};

const items: Item[] = [
  {
    id: 1,
    title: "Sản phẩm 1",
    description: "Em nhận đi xem phim, gia mắt, dạo phố, du lịch cùng anh nhé!",
    price: "500.000₫/1h",
    image: "/images/person.jpg",
  },
  {
    id: 2,
    title: "Sản phẩm 2",
    description: "Em nhận đi xem phim, gia mắt, dạo phố, du lịch cùng anh nhé!",
    price: "750.000₫/1h",
    image: "/images/person3.jpg",
  },
  {
    id: 3,
    title: "Sản phẩm 3",
    description: "Em nhận đi xem phim, gia mắt, dạo phố, du lịch cùng anh nhé!",
    price: "1.000.000₫/1h",
    image: "/images/person2.jpg",
  },
  {
    id: 4,
    title: "Sản phẩm 4",
    description: "Em nhận đi xem phim, gia mắt, dạo phố, du lịch cùng anh nhé!",
    price: "500.000₫/1h",
    image: "/images/person.jpg",
  },
  {
    id: 5,
    title: "Sản phẩm 5",
    description: "Em nhận đi xem phim, gia mắt, dạo phố, du lịch cùng anh nhé!",
    price: "750.000₫/1h",
    image: "/images/person3.jpg",
  },
];

const ItemListLayout = ({title} :PropListItem) => {
  return (
    <section className="w-full bg-gray-50 px-4 py-8">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {title}
            </h2>

            {/* Grid 4 cột ở desktop */}
            <div
            className="
                grid
                grid-cols-1
                sm:grid-cols-4
                lg:grid-cols-5
                gap-4
            "
            >
            {items.map((item) => (
                <article
                key={item.id}
                className="
                bg-white rounded-xl shadow p-4
                flex flex-row md:flex-col
                gap-3
                "
            >
                {/* Ảnh bên trái (mobile) / trên (desktop) */}
                <div className="relative w-24 h-24 flex-shrink-0 md:w-full md:h-40">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="rounded-lg object-cover"
                />
                </div>
            
                {/* Thông tin bên phải (mobile) / dưới (desktop) */}
                <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-1 line-clamp-1">
                    {item.title}
                    </h3>
                    <strong className="text-xs text-gray-600 block mb-1">
                    Hà Nội - Ba Đình
                    </strong>
                    <p className="text-xs md:text-sm text-gray-600 line-clamp-2">
                    {item.description}
                    </p>
                </div>
            
                <div className="mt-2 flex md:items-start md:flex-col items-center justify-between gap-2">
                    <span className="text-pink-600 font-semibold text-xs md:text-sm">
                    {item.price}
                    </span>
                    <button className="text-[11px] md:text-xs px-3 py-1.5 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition-colors">
                    Xem chi tiết
                    </button>
                </div>
                </div>
            </article>
            ))}
            </div>
        </div>
    </section>
  );
};

export default ItemListLayout;