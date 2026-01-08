"use client"

import React, { useState, useEffect, useEffectEvent } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

    const logCountNew = useEffectEvent(() => {
        console.log(count)
    });

  // Lỗi xảy ra ở đây: useEffect không có `count` trong dependency array
  // nên closure này chỉ ghi nhớ giá trị count = 0 ban đầu.
  useEffect(() => {
    document.getElementById('check')?.addEventListener('click', () => {
      logCountNew();
    })
  }, []); // Dependency array rỗng: effect chỉ chạy một lần khi mount

  return (
    <div>
      <h1>{count}</h1>
      <button id="button" onClick={() => setCount(count + 1)}>Tăng</button>
      <br></br>
      <button id="check">check</button>
    </div>
  );
}