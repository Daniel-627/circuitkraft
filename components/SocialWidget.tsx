// components/SocialWidget.tsx
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { TbX } from "react-icons/tb"; // X (formerly Twitter) icon

export default function SocialWidget() {
  const socialLinks = [
    {
      id: "facebook",
      icon: <FaFacebookF />,
      url: "https://facebook.com",
      bgColor: "bg-blue-600", // Facebook brand color
      followers: "12.4K",
    },
    {
      id: "x",
      icon: <TbX />,
      url: "https://x.com", // Updated URL for X
      bgColor: "bg-black", // Black for X brand color
      followers: "8.3K",
    },
    {
      id: "instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com",
      bgColor: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400", // Instagram gradient color
      followers: "15.7K",
    },
    {
      id: "youtube",
      icon: <FaYoutube />,
      url: "https://youtube.com",
      bgColor: "bg-red-600", // YouTube brand color
      subscribers: "20.4K",
    },
  ];

  return (
    <div className="p-2 rounded-lg max-w-sm m-2 border-b-2 ">
      <h2 className="text-xl font-semibold text-center mb-4">Follow Us</h2>
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
            <span className="text-sm font-semibold mt-1 text-gray-800">
              {link.followers || link.subscribers}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
