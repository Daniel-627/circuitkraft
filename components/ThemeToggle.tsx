'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

/**
 * ThemeToggle Component
 * 
 * This component toggles between light and dark modes.
 * 
 * Color Variations:
 * - Light Mode:
 *   - Background: bg-gray-200
 *   - Hover Background: bg-gray-300
 *   - Icon (Sun): text-yellow-500
 *   - Icon (Moon): text-gray-600
 *   - Accent Color: Blue (Replace with Green in Dark Mode)
 * 
 * - Dark Mode:
 *   - Background: bg-[#192428] (Main Background)
 *   - Hover Background: bg-gray-700
 *   - Icon (Sun): text-yellow-500
 *   - Icon (Moon): text-gray-300
 *   - Accent Color: Green (Replaces Blue in Light Mode)
 */
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent SSR mismatch

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed bottom-4 right-4 p-3 bg-gray-200 dark:bg-[#192428] rounded-full shadow-lg z-50 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none"
    >
      {theme === 'dark' ? (
        <FiSun className="text-yellow-500 w-6 h-6" />
      ) : (
        <FiMoon className="text-gray-600 dark:text-gray-300 w-6 h-6" />
      )}
    </button>
  );
}
