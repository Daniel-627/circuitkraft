// components/SocialWidget.tsx
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X (formerly Twitter) icon

export default function SocialWidget() {
  const socialLinks = [
    {
      id: "x",
      icon: <FaXTwitter />,
      url: "https://x.com",
      bgColor: "bg-black dark:bg-gray-900", // Dark mode for X
      followers: "8.3K",
    },
    {
      id: "youtube",
      icon: <FaYoutube />,
      url: "https://youtube.com",
      bgColor: "bg-red-600 dark:bg-red-700", // Dark mode for YouTube
      subscribers: "20.4K",
    },
  ];

  return (
    <div className="p-2 max-w-sm m-2 border-b-2">
      <h2 className="text-xl font-semibold text-center mb-4">
        Follow Us
      </h2>
      <div className="flex justify-around">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.id}
            className="flex flex-col items-center text-white"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full ${link.bgColor}`}
            >
              <span className="text-lg">{link.icon}</span>
            </div>
            <span className="text-sm font-semibold mt-1 text-gray-800 dark:text-gray-300">
              {link.followers || link.subscribers}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
