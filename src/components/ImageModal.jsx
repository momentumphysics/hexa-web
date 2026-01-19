import React, { useEffect, useState } from 'react';

export default function ImageModal({ isOpen, onClose, images, alt }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
            setCurrentIndex(0); // Reset to first image when opening
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
            setIsAnimating(false);
        };
    }, [isOpen, onClose]);

    const handleNext = (e) => {
        e.stopPropagation();
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
            setIsAnimating(false);
        }, 300); // Wait for exit animation
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-all duration-300 animate-fade-in"
            onClick={onClose}
        >
            <div className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-20"
                >
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Main Content Area */}
                <div className="relative w-full h-[80vh] flex items-center justify-center">
                    <img
                        src={images[currentIndex]}
                        alt={`${alt} - View ${currentIndex + 1}`}
                        className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-300 transform ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                    />

                    {/* Navigation Button (Only if multiple images) */}
                    {images.length > 1 && (
                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 backdrop-blur-sm transition-all hover:scale-110"
                            title="Next Image"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Image Counter */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white font-medium bg-black/50 px-4 py-1 rounded-full text-sm">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>
        </div>
    );
}
