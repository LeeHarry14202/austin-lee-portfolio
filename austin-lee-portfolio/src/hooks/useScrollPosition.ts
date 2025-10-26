'use client';


export function useScrollPosition() {

  // Save current scroll position
  const saveScrollPosition = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('homeScrollPosition', window.scrollY.toString());
    }
  };

  // Restore scroll position
  const restoreScrollPosition = () => {
    if (typeof window !== 'undefined') {
      const savedPosition = sessionStorage.getItem('homeScrollPosition');
      if (savedPosition) {
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          window.scrollTo({
            top: parseInt(savedPosition, 10),
            left: 0,
            behavior: 'instant'
          });
        });
      }
    }
  };

  // Clear saved position
  const clearScrollPosition = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('homeScrollPosition');
    }
  };

  return {
    saveScrollPosition,
    restoreScrollPosition,
    clearScrollPosition
  };
}

// Function to save scroll position before navigation
export function saveScrollPositionAndNavigate(href: string) {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('homeScrollPosition', window.scrollY.toString());
    window.location.href = href;
  }
}
