import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

function CountDown() {
  const [countdown, setCountdown] = useState(10);

  // tạo 1 biến lưu trữ interval
  const intervalRef = useRef(null);

  // hàm xử lý countdown
  const startCountDown = () => {
    // xóa interval cũ nếu có
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        // nếu prev === 0 dừng chạy và clearInterval
        if (prev === 0) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // hàm xử lý khi click reset
  const handleReset = () => {
    setCountdown(10);
    startCountDown();
  };

  useEffect(() => {
    // bắt đầu đếm khi mount
    startCountDown();
    // clean khi unmount
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <h1>CountDown</h1>
      <h2>Count is {countdown}</h2>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
}

export default CountDown;
