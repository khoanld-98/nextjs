"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Trang chủ", href: "/",  className: "hover:text-blue-600 transition-colors text-gray-500" },
  { name: "Giới thiệu", href: "/about", className: "hover:text-blue-600 transition-colors text-gray-500"},
  { name: "Dịch vụ", href: "/services", className: "hover:text-blue-600 transition-colors text-gray-500" },
  { name: "Liên hệ", href: "/contact", className: "hover:text-blue-600 transition-colors text-gray-500" },
  { name: "Đăng nhập", href: "/login", className: "px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow sticky top-0 z-50">
		<div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
			{/* Logo */}
			<Link href="/" className="font-bold text-xl text-gray-500">
			MySite
			</Link>

			{/* Nút mobile */}
			<button
			className="lg:hidden p-2"
			onClick={() => setOpen(!open)}
			aria-label="Toggle menu"
			>
				<div className="w-6 h-[2px] bg-black mb-1" />
				<div className="w-6 h-[2px] bg-black mb-1" />
				<div className="w-6 h-[2px] bg-black" />
			</button>

			{/* Menu desktop */}
			<ul className="hidden lg:flex gap-6">
			{navItems.map((item) => (
				<li key={item.href}>
				<Link
					href={item.href}
					className={item.className}
				>
					{item.name}
				</Link>
				</li>
			))}
			</ul>
		</div>

		{/* Menu mobile */}
		{open && (
			<ul className="lg:hidden px-4 pb-4 space-y-2 bg-white border-t">
				{navItems.map((item) => (
					<li key={item.href}>
					<Link
						href={item.href}
						className="block py-2 hover:text-blue-600"
						onClick={() => setOpen(false)}
					>
						{item.name}
					</Link>
					</li>
				))}
			</ul>
		)}
	</nav>
  );
}