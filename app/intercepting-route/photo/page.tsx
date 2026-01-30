"use client";

import { use } from "react";
import Link from 'next/link';

export default  function PhotoPage({ params }: { params: Promise<{ id: string }> }) {
  const {id} = use(params);
  
  return <h1>Đây là trang chi tiết ảnh của ID: {id} (Full Page) <Link href="/intercepting-route/photo/1">Xem ảnh</Link></h1>;
}