"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselProps {
  items: string[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 4;
  const totalItems = items.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Store timeout ID

  // Function to move to the next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  }, [totalItems]);

  // Start the auto-slide timer and reset on each index change
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(nextSlide, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, nextSlide]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex space-x-4">
        {/* Carousel Items */}
        <AnimatePresence initial={false}>
          {items
            .slice(currentIndex, currentIndex + visibleItems)
            .concat(
              items.slice(0, (currentIndex + visibleItems) % totalItems)
            )
            .map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 w-1/4"
              >
                <div className="p-4 bg-gray-300 rounded-lg shadow">
                  {item}
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel;
