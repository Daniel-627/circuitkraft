import Link from 'next/link';
import logo1 from '@/public/logo1.png';
import logo2 from '@/public/logo2.png';
import Image from 'next/image';


const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <div className=" flex justify-between items-center">
        <div className=" text-xl font-bold">
          <Link href="/" className='flex flex-row space-x-2'>
            <Image
              src={logo1}
              alt="My Photo"
              width={40}
              height={40}
              quality={100}
              placeholder="blur"
              className=""
            />
            <Image
              src={logo2}
              alt="My Photo"
              
              height={30}
              quality={100}
              placeholder="blur"
              className=""
            />
          </Link>
        </div>
        <ul className="flex space-x-4 flex-row">
          <li>
            <Link href="/blog" className="">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/authors" className="">
              Authors
            </Link>
          </li>
          <li>
            <Link href="/categories" className="">
              Categories
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
