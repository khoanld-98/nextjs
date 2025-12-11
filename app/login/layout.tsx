import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Đăng nhập - Ứng dụng của bạn",
	description: "Trang đăng nhập sử dụng đăng nhập bên thứ 3",
};
  
export default function loginLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100 h-full w-full">
			<section className="w-full">{ children }</section>
		</div>
    );
  }