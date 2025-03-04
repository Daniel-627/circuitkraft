import Image from "next/image";
import MainPage from '@/components/MainPage';
import AllWidgets from '@/components/AllWidgets';

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
      <div className='grid grid-cols-12'>
        <div className='col-span-12 lg:col-span-9'>
          <MainPage />
        </div>
        <div className='hidden lg:block lg:col-span-3'>
          <AllWidgets />
        </div>
      </div>
    </div>
  )
}
