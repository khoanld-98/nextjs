"use client";
import Image from "next/image";
import { useState } from "react";

type PropListItem = {
    title: string;
}

type Girl = {
  id: number;
  name: string;
  price: number;
  desc: string;
  rate: number;
  rateCount: number;
  avatar: string;
};

const data: Girl[] = [
  {
    id: 1,
    name: "Tiểu Lưon 🍆",
    price: 330,
    desc: "Bé không nhận duo của Streamer ạ !",
    rate: 5,
    rateCount: 1000,
    avatar: "/images/person.jpg",
  },
  {
    id: 2,
    name: "Dyy Dy",
    price: 270,
    desc: "Mình thích chơi gem nì",
    rate: 5,
    rateCount: 108,
    avatar: "/images/person2.jpg",
  },
  {
    id: 3,
    name: "Đâuu ❤️🍓",
    price: 310,
    desc: "hát hay + game (Lol, steam). Chuyên đi...",
    rate: 5,
    rateCount: 373,
    avatar: "/images/person3.jpg",
  },
  {
    id: 4,
    name: "Mẫn Mẫn 🍒",
    price: 270,
    desc: "Nhận chơi dui dè, ai quạu đi về",
    rate: 4.94,
    rateCount: 336,
    avatar: "/images/person.jpg",
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
           <main className="bg-[#f5f5ff] py-6">
				<div className="max-w-6xl mx-auto px-3">
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{data.map((girl) => (
						 <article className="bg-white rounded-3xl shadow-sm border border-purple-200 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-md transition">
							{/* Ảnh */}
							<div className="relative">
								<img
								src={girl.avatar}
								alt={girl.name}
								className="w-full h-60 object-cover"
								/>
								{/* icon live */}
								<div className="absolute top-2 left-2 flex items-center gap-1 bg-white/90 text-red-500 text-xs px-2 py-1 rounded-full">
								<span className="inline-block h-2 w-2 rounded-full bg-red-500 animate-pulse" />
								<span>LIVE</span>
								</div>
								{/* giá */}
								<div className="absolute bottom-2 right-2 bg-white/90 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
								<span className="text-pink-600">{girl.price}</span>
								<span className="text-gray-500">💎/H</span>
								</div>
							</div>

							{/* Nội dung */}
							<div className="p-3 flex-1 flex flex-col justify-between">
								<div>
								<h3 className="text-sm font-semibold text-gray-900 truncate">
									{girl.name}
								</h3>
								<p className="mt-1 text-xs text-gray-600 line-clamp-2">
									{girl.desc}
								</p>
								</div>

								{/* footer */}
								<div className="mt-3 flex items-center justify-between text-xs">
								{/* icon game giả */}
								<div className="flex -space-x-1">
									<div className="h-5 w-5 rounded-full border border-white bg-yellow-400" />
									<div className="h-5 w-5 rounded-full border border-white bg-blue-400" />
									<div className="h-5 w-5 rounded-full border border-white bg-red-400" />
								</div>
								{/* rating */}
								<div className="flex items-center gap-1 text-gray-600">
									<span className="text-red-500">★</span>
									<span className="font-semibold">{girl.rate}</span>
									<span>({girl.rateCount})</span>
								</div>
								</div>
							</div>
							</article>
					))}
					</div>
				</div>
			</main>
        </div>
    </section>
  );
};

export default ItemListLayout;