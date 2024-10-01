import Link from 'next/link';
import logo1 from '@/public/logo1.png';
import logo2 from '@/public/logo2.png';
import Image from 'next/image';
import { blogPosts } from '@/data/blogs'; // Adjust the path to your blogs data

const Navbar = () => {
  // Extract categories and get the latest three unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.categories).flat())).slice(0, 3);

  return (
    <nav className="bg-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/" className='flex flex-row space-x-2'>
            <Image
              src={logo1}
              alt="Logo 1"
              width={40}
              height={40}
              quality={100}
              placeholder="blur"
              className=""
            />
            <Image
              src={logo2}
              alt="Logo 2"
              height={30}
              quality={100}
              placeholder="blur"
              className=""
            />
          </Link>
        </div>
        <ul className="flex space-x-4 flex-row">
          {categories.map((category, index) => (
            <li key={index}>
              <Link href={`/categories/${category}`} className="">
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
