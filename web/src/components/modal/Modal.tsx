'use client';

import { useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  overlayColor?: string;  // 추가
}

export default function Modal({ 
  isOpen, 
  onClose, 
  children, 
  overlayColor = ''  // 기본값
}: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div 
      className={`fixed inset-0 ${overlayColor} flex items-start justify-center z-[9999] pt-20 overflow-y-auto`}
      onClick={onClose}
    >
      <div 
        className=" p-6 rounded-lg max-w-md w-full mx-4 relative border border-[var(--border-strong)] contentsCard"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}