'use client';

import { saveScrollPositionAndNavigate } from '@/hooks/useScrollPosition';

interface ScrollAwareLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

export function ScrollAwareLink({ 
  href, 
  children, 
  className,
  onMouseEnter,
  onMouseLeave,
  onClick
}: ScrollAwareLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Call custom onClick if provided
    if (onClick) {
      onClick();
    }
    
    // Save scroll position and navigate
    saveScrollPositionAndNavigate(href);
  };

  return (
    <a
      href={href}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
