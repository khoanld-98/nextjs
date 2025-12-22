import InformationJob from  '@/src/component/detail/InformationJob';
import TabDetail from '@/src/component/detail/Tab';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {/* flex-col trên mobile, md trở lên mới nằm hàng ngang */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-0 py-6 flex flex-col gap-4 md:flex-row">
        {/* Sidebar trái */}
        {/* full width mobile, cố định rộng ở md+ */}
        <aside className="w-full md:w-80 md:flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm p-4">
            {/* Ảnh + tên */}
            <div className="flex flex-col items-center">
				<div className="relative">
					<img
					src="/images/person.jpg"
					alt="avatar"
					className="h-32 w-32 rounded-2xl object-cover"
					/>
					<div className="absolute -top-3 -left-3 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
					Lv 9
					</div>
				</div>
              <h2 className="mt-3 text-xl font-semibold text-gray-900">
                Đậuu ❤️ 🍓
              </h2>
              <p className="text-xs text-gray-500 mt-1">ID 28471469</p>
            </div>

            {/* Thống kê */}
            <div className="grid grid-cols-3 gap-2 mt-4 text-center text-xs">
				<div className="bg-gray-50 rounded-xl p-2">
					<p className="text-gray-500">Theo dõi</p>
					<p className="font-semibold text-pink-500">2</p>
				</div>
				<div className="bg-gray-50 rounded-xl p-2">
					<p className="text-gray-500">Người hâm mộ</p>
					<p className="font-semibold">397</p>
				</div>
				<div className="bg-gray-50 rounded-xl p-2">
					<p className="text-gray-500">Đặt đơn</p>
					<p className="font-semibold">2.3K</p>
				</div>
            </div>

            {/* Nút */}
            <div className="mt-4 flex flex-col gap-2">
				<button className=" cursor-pointer w-full rounded-full bg-red-500 text-white py-2 text-sm font-semibold">
					Sẵn sàng
				</button>
				<div className="flex gap-2">
					<button className=" cursor-pointer flex-1 rounded-full border border-pink-500 text-pink-500 py-2 text-sm">
					Donate
					</button>
					<button className=" cursor-pointer flex-1 rounded-full bg-pink-500 text-white py-2 text-sm">
					Gửi lộc
					</button>
				</div>
            </div>
          </div>
        </aside>

        {/* Nội dung phải */}
        <section className="flex-1">
			<InformationJob />
			<TabDetail />
        </section>
      </div>
    </main>
  );
}