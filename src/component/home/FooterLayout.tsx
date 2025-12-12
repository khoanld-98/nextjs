const Footer = () => {
    return (
      <footer className="w-full bg-gray-900 text-gray-300 mt-8">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Hàng trên: logo + link */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
            {/* Logo / tên web */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold text-white">MyWebsite</h2>
              <p className="text-sm text-gray-400 mt-1">
                Nền tảng cho thuê sản phẩm nhanh chóng và tiện lợi.
              </p>
            </div>
  
            {/* Link điều hướng */}
            <div className="flex gap-6 text-sm">
              <div className="text-center md:text-left">
                <h3 className="font-semibold text-white mb-2">Liên kết</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="/" className="hover:text-white">
                      Trang chủ
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-white">
                      Giới thiệu
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-white">
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>
  
              <div className="text-center md:text-left">
                <h3 className="font-semibold text-white mb-2">Hỗ trợ</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="/faq" className="hover:text-white">
                      Câu hỏi thường gặp
                    </a>
                  </li>
                  <li>
                    <a href="/policy" className="hover:text-white">
                      Chính sách
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Hàng dưới: bản quyền */}
          <div className="border-t border-gray-700 mt-4 pt-4 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} MyWebsite. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;