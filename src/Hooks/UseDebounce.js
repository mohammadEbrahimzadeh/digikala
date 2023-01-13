import React, { useEffect, useState } from "react";

export default function UseDebounce(value, delay) {
  const [DebouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return DebouncedValue;
}
