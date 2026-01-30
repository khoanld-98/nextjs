"use client";

import { use } from "react";
import { useRouter  } from "next/navigation";
export default function PhotoModal({ params }: { params: Promise<{ id: string }> }) {
  
  const {id} = use(params)
  const router = useRouter();

  return (
    <div className="modal-overlay bg-red-500">
      <div className="modal-content">
        <h2>Xem nhanh ảnh: {id}</h2>
        <p>Tôi là Modal, tôi đang đè lên trang Feed!</p>
        <button onClick={() => router.back()}>Đóng</button>
      </div>
    </div>
  );
}