export default function TopMenu() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-0 h-14 flex items-center justify-between gap-3">
        {/* Logo bên trái */}
        <div className="flex items-center gap-3">
			<a href="/">
				 <img
					src="/images/logo.png"
					alt="logo"
					className="h-16 w-auto"
				/>
			</a>
        </div>

        {/* Icon giữa (ẩn bớt trên mobile nếu muốn) */}
        <nav className="hidden sm:flex items-center gap-3">
          <button className="h-9 w-9 rounded-full bg-red-500 flex items-center justify-center text-white">
            {/* icon home */}
            🏠
          </button>
          <button className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
            🎥
          </button>
          <button className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
            🏆
          </button>
        </nav>

        {/* Khối phải */}
        <div className="flex items-center gap-3">
          {/* Chuyển ngôn ngữ */}
          <button className="hidden xs:flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">
            <span className="text-base">🇻🇳</span>
            <span>VI</span>
            <span>▾</span>
          </button>

          {/* Kim cương */}
          <div className="hidden sm:flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs">
            <span className="text-lg">💎</span>
            <span>0</span>
          </div>

          {/* Đăng nhập */}
		  <a href="/login">
		  	<button className="px-3 sm:px-4 py-1.5 rounded-full bg-gray-200 text-xs sm:text-sm font-semibold text-gray-800">
				Đăng nhập
			</button>
		  </a>
         
        </div>
      </div>
    </header>
  );
}