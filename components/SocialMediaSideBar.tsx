// components/SocialMediaSideBar.tsx
"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter} from "react-icons/fa6";
import { IconType } from "react-icons";

type SocialMediaLink = {
  href: string;
  Icon: IconType;
  label: string;
};

const socialMediaLinks: SocialMediaLink[] = [
  {
    href: "https://www.twitter.com/",
    Icon: FaXTwitter,
    label: "Twitter",
  },
  {
    href: "https://www.youtube.com/",
    Icon: FaYoutube,
    label: "LinkedIn",
  },
];

export default function SocialMediaSideBar() {
  return (
    <div className="p-3 rounded-lg">
      <div className="flex flex-col space-y-4 items-center">
        {socialMediaLinks.map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-xl hover:text-blue-500 transition-transform transform hover:scale-125"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
}
