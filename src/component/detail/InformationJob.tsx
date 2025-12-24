'use client'

export default function InformationJob() {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-4">
				{/* Header Game */}
				<h3 className="text-xl font-semibold mb-4">Game:</h3>

				{/* Tabs game: cuộn ngang nếu nhiều trên mobile */}
				<div className="flex gap-2 mb-4 overflow-x-auto pb-1">
				<button className=" cursor-pointer whitespace-nowrap px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium border border-orange-400">
					Liên Minh Huyền Thoại
				</button>
				<button className=" cursor-pointer whitespace-nowrap px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm">
					Hát
				</button>
				<button className=" cursor-pointer whitespace-nowrap px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm">
					Tâm Sự
				</button>
				</div>

            {/* Card chi tiết: cột trên mobile, 2 cột ở md+ */}
            <div className="flex flex-col gap-6 md:flex-row">
				<div className="flex-1">
					<h4 className="text-lg font-semibold mb-2">Liên Minh Huyền Thoại</h4>
					<p className="text-sm text-gray-600">Thời kỳ nhận: Thứ 2 - Thứ 7, Chủ nhật.</p>
					<p className="text-sm text-gray-600">
					Thời gian nhận: 00:00 - 00:00.
					</p>

					{/* Thanh audio demo */}
					<div className="mt-3 flex items-center gap-3">
					<button className=" cursor-pointer h-10 w-10 rounded-full bg-red-500 text-white flex items-center justify-center">
						▶
					</button>
					<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
						<div className="h-full w-1/3 bg-red-500" />
					</div>
					<span className="text-xs text-gray-500">0:12</span>
					</div>

                {/* Mô tả */}
                <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                 	Nhận game, hát và game (Lol, Steam)... (điền mô tả của bạn ở đây).
                </p>
              </div>

              {/* Box giá bên phải */}
				<div className="w-full md:w-60">
					<div className="bg-red-50 rounded-2xl p-4 flex flex-col items-center gap-3">
					<p className="text-2xl font-bold text-red-500">
						310<span className="text-base font-semibold"> 💎/h</span>
					</p>
					<button className=" cursor-pointer w-full py-2 rounded-full bg-red-500 text-white font-semibold">
						Đặt đơn
					</button>
					<button className=" cursor-pointer w-full py-2 rounded-full bg-white border border-gray-300 text-gray-800 font-medium">
						Trò chuyện
					</button>
					</div>
				</div>
            </div>
        </div>
    );
}