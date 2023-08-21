function throttle(callback: () => void, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function throttledCallback() {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        callback();
        timeoutId = null;
      }, delay);
    }
  };
}

export default throttle;
