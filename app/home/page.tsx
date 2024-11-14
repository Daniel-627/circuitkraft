import React from 'react'

import MainPage from '@/components/MainPage';
import AllWidgets from '@/components/AllWidgets';

type Props = {}

export default function page({}: Props) {
  return (
    <div>
      <div className='grid grid-cols-12'>
        <div className='col-span-9'>
          <MainPage />
        </div>
        <div className='col-span-3'>
          <AllWidgets />
        </div>
      </div>
    </div>
  )
}