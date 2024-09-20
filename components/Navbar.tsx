import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/">My Blog</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/blog" className="text-white hover:text-gray-300">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/authors" className="text-white hover:text-gray-300">
              Authors
            </Link>
          </li>
          <li>
            <Link href="/categories" className="text-white hover:text-gray-300">
              Categories
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
