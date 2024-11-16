// components/SocialWidget.tsx
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialWidget() {
  const socialLinks = [
    {
      id: "facebook",
      icon: <FaFacebookF />,
      url: "https://facebook.com",
      label: "Facebook",
      followers: "12K", // Example follower count
    },
    {
      id: "twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com",
      label: "Twitter",
      followers: "8K", // Example follower count
    },
    {
      id: "instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com",
      label: "Instagram",
      followers: "15K", // Example follower count
    },
    {
      id: "youtube",
      icon: <FaYoutube />,
      url: "https://youtube.com",
      label: "YouTube",
      subscribers: "20K", // Example subscriber count
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg max-w-sm">
      <h2 className="text-xl font-semibold text-center mb-4">Follow Us</h2>
      <div className="space-y-4">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="flex items-center justify-between text-gray-700 hover:text-blue-500 transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">{link.icon}</span>
              <span className="text-lg font-medium">{link.label}</span>
            </div>
            <span className="text-sm text-gray-500">
              {link.followers ? `${link.followers} Followers` : `${link.subscribers} Subscribers`}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
