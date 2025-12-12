import Image from "next/image";

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
  {
    id: 6,
    title: "Sản phẩm 6",
    description: "Em nhận đi xem phim, gia mắt, dạo phố, du lịch cùng anh nhé!",
    price: "1.000.000₫/1h",
    image: "/images/person2.jpg",
  },
];

const ItemListLayout = () => {
  return (
    <section className="w-full bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Danh sách sản phẩm
        </h2>

        {items.map((item) => (
          <article
            key={item.id + 12312321}
            className="
              bg-white rounded-xl shadow
              p-4
              flex flex-row
              gap-4
            "
          >
            {/* Ảnh bên trái */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>

            {/* Thông tin bên phải */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
                  {item.title}
                </h3>
                <strong className="text-sm text-gray-600 line-clamp-2">
                  Hà Nội- Ba Đình
                </strong>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-pink-600 font-semibold">
                  {item.price}
                </span>
                <button className="text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition-colors">
                  Xem chi tiết
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ItemListLayout;