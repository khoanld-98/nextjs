"use client";

type Review = {
  id: number;
  user: string;
  rating: number;
  date: string;
  comment: string;
};

const reviews: Review[] = [
  {
    id: 1,
    user: "Nguyễn Văn A",
    rating: 5,
    date: "20/12/2025",
    comment: "Sản phẩm rất tốt, giao hàng nhanh, đóng gói cẩn thận.",
  },
  {
    id: 2,
    user: "Trần Thị B",
    rating: 4,
    date: "18/12/2025",
    comment: "Chất lượng ổn so với tầm giá, sẽ ủng hộ lần sau.",
  },
  {
    id: 3,
    user: "Lê Văn C",
    rating: 3,
    date: "15/12/2025",
    comment: "Sản phẩm tạm ổn, còn một vài điểm chưa ưng ý.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = index < rating;
        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={filled ? "#facc15" : "none"}
            className="h-4 w-4 stroke-[#facc15]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.037a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.037a1 1 0 00-1.175 0l-2.802 2.037c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        );
      })}
    </div>
  );
}

export default function ProductReview() {
  const totalReviews = reviews.length;
  const avgRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;

  return (
    <section className="bg-white rounded-2xl shadow-sm p-4 mt-8">
      {/* Header: điểm trung bình */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                        Đánh giá sản phẩm
                    </h2>
                    <p className="text-sm text-gray-500">
                        {totalReviews} đánh giá từ khách hàng
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="text-3xl font-bold text-gray-900">
                        {avgRating.toFixed(1)}
                    </div>
                    <div>
                        <StarRating rating={Math.round(avgRating)} />
                        <p className="text-xs text-gray-500 mt-1">Trung bình trên 5 sao</p>
                    </div>
                </div>
        </div>

        <hr className="border-gray-200" />

      {/* Danh sách review */}
        <div className="space-y-4 max-h-80 overflow-y-auto pr-1 mt-2">
            {reviews.map((review) => (
            <article
                key={review.id}
                className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition"
            >
                <div className="flex items-center justify-between gap-2">
                <div>
                    <p className="text-sm font-medium text-gray-900">
                        {review.user}
                    </p>
                    <p className="text-xs text-gray-400">{review.date}</p>
                </div>
                <div className="flex items-center gap-2">
                    <StarRating rating={review.rating} />
                    <span className="text-xs font-semibold text-gray-700">
                        {review.rating}.0
                    </span>
                </div>
                </div>
                <p className="mt-2 text-sm text-gray-700">{review.comment}</p>
            </article>
            ))}
        </div>

      {/* CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                    Xem tất cả đánh giá
                </button>
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                    Viết đánh giá của bạn
                </button>
        </div>
    </section>
  );
}