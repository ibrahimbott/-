import { useState, useEffect } from 'react';

export function FlashSaleTimer() {
  const [timeLeft, setTimeLeft] = useState(14 * 60 * 60 + 32 * 60 + 15); // 14 hours

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex gap-2 text-[18px] font-mono font-bold" dir="ltr">
      <div className="bg-white text-brand-emerald px-2 py-1 rounded-[4px]">{hours.toString().padStart(2, '0')}</div>:
      <div className="bg-white text-brand-emerald px-2 py-1 rounded-[4px]">{minutes.toString().padStart(2, '0')}</div>:
      <div className="bg-white text-brand-emerald px-2 py-1 rounded-[4px]">{seconds.toString().padStart(2, '0')}</div>
    </div>
  );
}
